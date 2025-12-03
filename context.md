# Café Fausse Web Application — Copilot Context

## Overview
A full-stack web application for Café Fausse — a fine-dining restaurant.  
Built with **React (JSX)** frontend, **Flask** backend, and **PostgreSQL** database.  
Provides restaurant information, menu display, table reservations, gallery, and newsletter signup.

---

## Tech Stack
- **Frontend:** React + JSX
- **Backend:** Flask (Python)
- **Database:** PostgreSQL
- **Styling:** CSS Flexbox or Grid
- **API Communication:** RESTful endpoints via HTTP/HTTPS
- **Deployment:** Local or public web server

---

## Core Features

### 1. Web Pages
| Page | Description | Key Elements |
|------|--------------|--------------|
| **Home** | Landing page with restaurant info. | Restaurant name, address, phone, hours, nav links, images. |
| **Menu** | Displays categorized menu. | Starters, Main Courses, Desserts, Beverages with names, descriptions, and prices. |
| **Reservations** | Table booking form integrated with Flask backend. | Time slot, guests, name, email, phone (optional). |
| **About Us** | Restaurant story and team bios. | History, founders (Chef Antonio Rossi, Maria Lopez), mission. |
| **Gallery** | Visual showcase and awards. | Photos, awards, customer reviews, lightbox image viewing. |

### 2. Functional Components
- **Reservation System**
  - User submits time, guest count, name, email, phone.
  - Backend checks slot availability.
  - Assigns random table (1–30) if available.
  - Returns success or error message.
- **Email Newsletter Signup**
  - Validates email format.
  - Stores subscriber info in database.
- **Menu Display**
  - Static or DB-driven menu data organized by category.

---

## Database Schema (PostgreSQL)

### `customers` Table
| Column | Type | Notes |
|---------|------|-------|
| customer_id | SERIAL PRIMARY KEY | Unique customer ID |
| name | VARCHAR | Customer full name |
| email | VARCHAR | Must be valid email |
| phone | VARCHAR | Optional |
| newsletter_signup | BOOLEAN | True if subscribed |

### `reservations` Table
| Column | Type | Notes |
|---------|------|-------|
| reservation_id | SERIAL PRIMARY KEY | Unique reservation |
| customer_id | INT (FK → customers.customer_id) | Linked customer |
| time_slot | TIMESTAMP | Reservation time |
| table_number | INT | 1–30 |

---

## API Endpoints (Flask)

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `GET /api/menu` | Retrieve full menu (static or DB). |
| `POST /api/reservations` | Create new reservation, check availability, assign table. |
| `GET /api/reservations/<id>` | Fetch reservation details by ID. |
| `POST /api/newsletter` | Add new subscriber to mailing list. |

### Example Reservation Flow
1. React sends POST `/api/reservations` with JSON:
   ```json
   { "name": "John Doe", "email": "john@example.com", "guests": 2, "time_slot": "2025-05-10T19:00" }
