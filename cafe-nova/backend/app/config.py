from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy

import os

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_default_secret_key')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql+psycopg://user:password@localhost:5432/cafe_fausse')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    TABLE_LIMIT_PER_HOUR = int(os.getenv('TABLE_LIMIT_PER_HOUR', 30))

db = SQLAlchemy()
