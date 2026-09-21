# User Directory CRUD Application

A full-stack User Directory CRUD application developed as a practical project for the Advanced Web Development module. The system uses Angular for the frontend, Laravel for the backend, and a REST API to exchange data between both applications.

## Features

* Create new users
* View all users
* Update existing user information
* Delete users
* Angular-based responsive user interface
* Laravel REST API
* Frontend and backend integration
* Database-driven data management

## Technologies Used

### Frontend

* Angular
* TypeScript
* HTML
* CSS
* REST API integration

### Backend

* Laravel
* PHP
* MySQL
* RESTful API

## Project Structure

```text
user-directory-crud-application/
├── backend/      # Laravel API and database operations
└── frontend/     # Angular user interface
```

## Running the Application

### 1. Start the Laravel Backend

Open a terminal inside the backend directory:

```bash
cd backend
composer install
php artisan serve
```

The Laravel API will normally run at:

```text
http://127.0.0.1:8000
```

### 2. Start the Angular Frontend

Open another terminal inside the frontend directory:

```bash
cd frontend
npm install
ng serve
```

Open the application at:

```text
http://localhost:4200
```

## REST API Operations

| Operation | HTTP Method | Purpose                 |
| --------- | ----------- | ----------------------- |
| Create    | POST        | Add a new user          |
| Read      | GET         | Retrieve user records   |
| Update    | PUT/PATCH   | Update an existing user |
| Delete    | DELETE      | Remove a user           |

## Academic Purpose

This application was created as an Advanced Web Development practical project to demonstrate full-stack development, CRUD operations, Angular–Laravel integration, REST API communication, and database management.
