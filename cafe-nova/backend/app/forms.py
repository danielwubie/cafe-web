from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, NumberRange, Optional

class Reservations(FlaskForm):
    # DateTimeField expects input like 'YYYY-MM-DD HH:MM'
    time_slot = DateTimeField(
        "Reservation Time",
        format='%Y-%m-%dT%H:%M',  # matches '2025-11-09T10:51'
        validators=[DataRequired(message="Please provide a reservation date and time.")]
    )
    number_of_guests = IntegerField(
        "Number of Guests",
        validators=[
            DataRequired(message="Please enter the number of guests."),
            NumberRange(min=1, message="At least 1 guest is required.")
        ]
    )
    name = StringField(
        "Name",
        validators=[DataRequired(message="Please enter your name."), Length(min=2)]
    )
    email = StringField(
        "Email",
        validators=[DataRequired(message="Please enter your email."), Email(message="Invalid email address.")]
    )
    phone = StringField(
        "Phone Number",
        validators=[Optional()]
    )
    special_requests = TextAreaField(
        "Special Requests",
        validators=[Optional()]  # can be left empty
    )
    submit = SubmitField("Reserve")


class NewsletterSubscription(FlaskForm):
    # DateTimeField expects input like 'YYYY-MM-DD HH:MM'
    email = StringField(
        "Email",
        validators=[DataRequired(message="Please enter your email."), Email(message="Invalid email address.")]
    )
    submit = SubmitField("Reserve")