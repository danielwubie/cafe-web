from enum import Enum
from app.config import db

class CategoryEnum(str, Enum):
    STARTERS = "Starters"
    MAINS = "Main Courses"
    DESSERTS = "Desserts"
    DRINKS = "Beverages"
    
class Customer(db.Model):
    __tablename__ = 'customers'

    customer_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    phone = db.Column(db.String, nullable=True)
    # newsletter_signup = db.Column(db.Boolean, default=False)

class Reservation(db.Model):
    __tablename__ = 'reservations'

    reservation_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), nullable=False)
    time_slot = db.Column(db.DateTime, nullable=False)
    number_of_guests = db.Column(db.Integer, nullable=False)
    special_requests = db.Column(db.String, nullable=True)
    table_number = db.Column(db.Integer, nullable=False)

class MenuItem(db.Model):
    __tablename__ = 'menu_items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    ingredients = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.Enum(CategoryEnum, native_enum=False), nullable=False)

class NewsLetter(db.Model):
    __tablename__ = 'newsletter_subscriptions'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True )
    user_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), nullable=True)
