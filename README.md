Web UI - Customer Management System
This repository contains the Web UI for the Customer Management System, a modern React application designed to manage products, customers, purchases, and service requests. It communicates with a Python backend.

Table of Contents
Overview

Technology Stack

Installation & Setup

Running the Application

Project Structure

Authentication & Routing

API Integration

Custom Theming

Known Issues

Overview
The Web UI is a modern React application built for managing products, customers, purchases, and service requests. It serves as the frontend interface, communicating seamlessly with a Python backend (which is expected to be run via python main.py). The application prioritizes ease of use and extensibility.

Technology Stack
The application is built using the following key technologies:

React 18: The core UI library for building interactive user interfaces.

TypeScript: Provides type safety, enhancing code quality and maintainability.

Vite: A fast build tool for modern web projects.

Chakra UI: A comprehensive component library for building accessible and reusable UI components.

Material UI: Used specifically for various icons.

React Router v6: Manages routing within the application.

Axios: A promise-based HTTP client for making API requests.

date-fns: A lightweight and powerful library for working with dates.

Framer Motion: For fluid and declarative animations.

React Icons: A collection of popular icon sets.

For a complete list of dependencies and their versions, please refer to the package.json file.

Installation & Setup
To get the Web UI up and running on your local machine, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js: v14 or higher

npm: v6 or higher

Python 3.11+: Required for the backend server. (Refer to the backend's README for its specific setup instructions).

Steps
Install Frontend Dependencies:npm install


Note: The pip install -r requirements.txt command is for the backend and should be run in the backend's directory.


Running the Application
To run the full application, both the backend and frontend servers need to be started.

Start the Backend Server:
Navigate to your backend directory and run:
cd backend
python main.py



Start the Frontend Development Server:
From the root of this project (the Web UI directory), run:npm run dev



Login/Register
Access the application in your browser at the address provided by npm run dev.

Navigate to the /login or /signup pages to authenticate.

Most features within the application are protected and require a successful login.

Project Structure
The src/ directory is organized as follows:

src/
 ├── components/       # Reusable UI components (e.g., Navbar, ProtectedRoute, PublicRoute, EditModal)
 ├── context/          # React Contexts (e.g., AuthContext for authentication state management)
 ├── pages/            # Main application pages (e.g., Cards, Customers, Trips, Cases)
 ├── services/         # API integration logic (e.g., api.ts for Axios configuration and endpoints)
 ├── App.tsx           # The main application shell
 ├── main.tsx          # Entry point of the React application, responsible for providers
 ├── Routes.tsx        # Defines all application routes and implements route guards
 └── theme.ts          # Chakra UI theme customizations


Authentication & Routing
AuthContext (src/context/AuthContext.tsx): Manages the user's login state, stores the JSON Web Token (JWT) and username in localStorage, and provides methods for login and logout.

ProtectedRoute / PublicRoute: These components act as route guards, restricting access to certain pages based on the user's authentication status.

Routes (src/Routes.tsx): All core application features (e.g., cards, customers, trips) are protected routes. Only the /login and /signup paths are publicly accessible.

API Integration
API Base URL: The frontend communicates with the backend API at http://localhost:8173. This base URL is configured in src/services/api.ts.

API Client: Axios is used for all HTTP requests to the backend.

Endpoints: The application interacts with various API endpoints including Products, Customers, Purchases, Service Requests, Transaction History, Fare Disputes, and Authentication.

Error Handling: A global error interceptor is implemented to log API errors directly to the console, aiding in debugging.

Custom Theming
Chakra UI is utilized for all UI components, providing a consistent and accessible design system.

A custom theme is defined in src/theme.ts. This file sets a primary blue color for the application and customizes various button color schemes to align with the desired aesthetic.