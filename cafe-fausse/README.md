# Café Fausse — Full‑Stack Web Application

Small full‑stack web app for **Café Fausse**: React frontend + Flask backend + PostgreSQL database.  
**Features:** menu pages, gallery, table reservations, newsletter signup.

---

## Tech Stack
- **Frontend:** React (JSX)  
- **UI:** Material UI (MUI)  
- **Routing:** react-router-dom  
- **Backend:** Flask (Python)  
- **Database:** PostgreSQL  
- **ORM / Migrations:** SQLAlchemy + Flask-Migrate  
- **Environment Config:** python-dotenv  

---

## Repository Layout
cafe-fausse/
├─ frontend/ # React app (src/, public/, package.json, .env)
├─ backend/ # Flask app (app/, requirements.txt, .env.example)
└─ context.md # Project overview


---

## Prerequisites (Local Dev)
- Node.js (v14+)  
- Python (v3.9+)  
- PostgreSQL (local or remote)  
- Optional: Git, Docker (if containerizing)

---

## Environment Configuration

### Backend
1. Copy `backend/.env.example` to `backend/.env`.  
2. Set your database and secret key:
```env
SQLALCHEMY_DATABASE_URI=postgresql://user:password@localhost:5432/cafe_fausse
SECRET_KEY=your_secret_key
TABLE_LIMIT_PER_HOUR=30
```
Frontend

Configure frontend/.env if needed (e.g., API base URL).
By default, frontend expects API under /api.

# Installation & Setup
PostgreSQL

## Start PostgreSQL and create database/user
psql -U postgres -c "CREATE DATABASE cafefausse;"
psql -U postgres -c "CREATE USER cafefausse WITH PASSWORD 'change_me';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE cafefausse TO cafefausse;"

## Populate Menu
Run the SQL query found in /backend/resource/menu_psql_query to populate the menu

## Backend Setup
### Navigate to backend
cd backend

### Create & activate virtual environment
python -m venv .venv
.venv\Scripts\Activate.ps1

### Install dependencies
pip install -r requirements.txt
If missing, manually install:
pip install Flask SQLAlchemy psycopg2-binary python-dotenv Flask-Migrate

### cd into app Set Flask environment (PowerShell)
$env:FLASK_APP = "run"

### Initialize database migrations (first time only)
flask db init
flask db migrate -m "initial"
flask db upgrade

### Run server
flask run
 
### or
python -m app.run  //- from backend

## Backend API Endpoints

GET /api/menu — list menu
POST /api/reservations — create reservation (checks availability)
POST /api/newsletter — add subscriptions

## Frontend Setup
### Navigate to frontend
cd frontend

### Install dependencies
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom

### Run development server
npm start

### Default URLs

Frontend: http://localhost:3000
Backend: http://127.0.0.1:5000

Run frontend and backend in separate terminals.
If blocked by CORS add your ip to run.py line 22

