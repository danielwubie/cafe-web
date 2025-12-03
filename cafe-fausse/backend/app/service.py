from app.config import db
from app.models import MenuItem, Reservation, Customer, NewsLetter
from app.utils import  assign_table, generate_response
from app.forms import Reservations, NewsletterSubscription
from app.config import Config
from datetime import datetime
from sqlalchemy import extract

def get_menu_items():
    all_items = MenuItem.query.all()
    formatted_response = {}
    for item in all_items:
        if formatted_response.get(item.category.value) is None:
            formatted_response[item.category.value] = [{
                "name": item.name,
                "ingredients": item.ingredients,
                "price": item.price
            }]
        else:
            formatted_response[item.category.value] = [*formatted_response[item.category.value], {
                "name": item.name,
                "ingredients": item.ingredients,
                "price": item.price
            }]
    
    response=generate_response(formatted_response)  # example fields
    return response

def reserve_table(data):
    if not data:
        return {"success": False, "message": "Invalid JSON"}, 400
    form = Reservations(data=data)  # Populate form with JSON
    if form.validate_on_submit():
        # Extract form data
        time_slot = form.time_slot.data
        number_of_guests = form.number_of_guests.data
        name = form.name.data
        email = form.email.data
        phone = form.phone.data
        special_requests = form.special_requests.data

        if time_slot < datetime.now():
            return {
                "success": False,
                "message": "Cannot make reservation in the past."
            }, 400
        # get reservations and compare hours conflict by the same user
        previous_reservations = Reservation.query.join(Customer).filter(
            Customer.email == email,
            extract('year', Reservation.time_slot) == time_slot.year,
            extract('month', Reservation.time_slot) == time_slot.month,
            extract('day', Reservation.time_slot) == time_slot.day,
            extract('hour', Reservation.time_slot) == time_slot.hour
        ).all()
        if previous_reservations:
            return {
                "success": False,
                "message": "You already have a reservation at this time."
            }, 400
        # Optional: check if the same hour is already booked
        existing_reservations = Reservation.query.filter(
            extract('year', Reservation.time_slot) == time_slot.year,
            extract('month', Reservation.time_slot) == time_slot.month,
            extract('day', Reservation.time_slot) == time_slot.day,
            extract('hour', Reservation.time_slot) == time_slot.hour
        ).count()
        print(int(Config.TABLE_LIMIT_PER_HOUR))
        if existing_reservations >= int(Config.TABLE_LIMIT_PER_HOUR):
            return {
                "success": False,
                "message": "Time slot is fully booked. Please choose another hour."
            }, 400

        # Save reservation
        customer = Customer.query.filter_by(email=data['email']).first()
        if not customer:
            customer = Customer(
                name=name,
                email=email,
                phone=phone,
            )
            db.session.add(customer)
            db.session.commit()
        new_reservation = Reservation(
            customer_id=customer.customer_id,
            time_slot=time_slot,
            table_number=assign_table(),
            number_of_guests=number_of_guests,
            special_requests=special_requests
        )
        db.session.add(new_reservation)
        db.session.commit()

        return {
            "success": True,
            "message": f"Reservation successfully made for {name} at {time_slot.strftime('%Y-%m-%d %H:%M')}!"
        }, 201

    # Validation failed
    errors = form.errors  # dictionary of field-specific errors
    return {
        "success": False,
        "message": errors,
    }, 400


def get_reservation(id):
    reservation = Reservation.query.get(id)
    if reservation:
        response=generate_response({
            "reservation_id": reservation.reservation_id,
            "customer_id": reservation.customer_id,
            "time_slot": reservation.time_slot,
            "table_number": reservation.table_number
        })
        return response
    else:
        return {"error": "Reservation not found."}


def subscribe_newsletter(data):
    if not data:
        return {"success": False, "message": "Invalid JSON"}, 400
    form = NewsletterSubscription(data=data)  # Populate form with JSON
    if form.validate_on_submit():
        # Extract form data
        email = form.email.data
        # Save reservation
        customer = Customer.query.filter_by(email=email).first()
        previous_subscription = NewsLetter.query.filter_by(email=email).first()
        if previous_subscription:
            return {
                "success": False,
                "message": "This email is already subscribed to the newsletter."
            }, 400
        if not customer:
            subscriber = NewsLetter(
                email=email,
            )
            db.session.add(subscriber)
        else:
            subscriber = NewsLetter(
                email=data['email'],
                user_id=customer.customer_id
            )
            db.session.add(subscriber)
        try:
            db.session.commit()
        except Exception as e:
            return {
                "success": False,
                "message": "Newsletter subscription failed.",
                "errors": str(e)
            }, 400

        return {
            "success": True,
            "message": f"Newsletter subscription successful for {email}!"
        }, 201

    # Validation failed
    errors = form.errors  # dictionary of field-specific errors
    return {
        "success": False,
        "message": "Reservation failed.",
        "errors": errors
    }, 400

