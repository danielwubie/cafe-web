from flask import Flask
from flask_cors import CORS
from config import Config, db
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect
from app.models import *

migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__, static_folder=None)
    # app.config['SECRET_KEY'] = 'random-secret-key'  # Replace with a secure key in production
    app.config.from_object(config_class)
    app.config['WTF_CSRF_CHECK_DEFAULT'] = True
    CSRFProtect(app)

    db.init_app(app)
    migrate.init_app(app, db)
    with app.app_context():
        db.create_all()
        
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://192.168.1.120:3000"], supports_credentials=True)

    from .routes import bp as main_blueprint
    app.register_blueprint(main_blueprint)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)