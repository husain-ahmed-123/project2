# Roadside Assist

Roadside Assist is a full-stack web application designed to help drivers request help quickly when their vehicle breaks down. The app allows users to create an account, register their car, submit roadside assistance requests, and review past requests. It combines a clean landing page with secure authentication and MongoDB-powered data storage.

## Overview

When the road gets rough, Roadside Assist is there to help. The site is built around the idea that drivers need fast, simple support when dealing with unexpected vehicle issues such as flat tires, dead batteries, fuel shortages, or other roadside emergencies.

## Screenshots

<img src= "/Users/husain/code/ga/project2/images/Screenshot 2026-11-09 at 9.34.40 AM.png">

<img src= "/Users/husain/code/ga/project2/images/Screenshot 2026-11-09 at 9.34.53 AM.png">

<img src= "/Users/husain/code/ga/project2/images/Screenshot 2026-11-09 at 9.34.03 AM.png">

<img src= "/Users/husain/code/ga/project2/images/Screenshot 2026-11-09 at 9.35.06 AM.png">

<img src= "/Users/husain/code/ga/project2/images/Screenshot 2026-11-09 at 9.35.44 AM.png">

<img src= "/Users/husain/code/ga/project2/images/Screenshot 2026-11-09 at 9.36.18 AM.png">

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- EJS templates
- MongoDB with Mongoose
- Express Session
- bcrypt for password hashing
- method-override for form updates

## User Stories

User Stories:

1. User Registration: As a visitor, I want to create an account so that I can access roadside assistance services.

2. User Login: As a registered user, I want to log in securely so that I can access my account.

3. Vehicle Management: As a customer, I want to add my vehicle information so that my vehicle details are available when requesting assistance.

4. Create Assistance Request: As a customer, I want to specify the problem and submit a roadside assistance request so that I can get help when my vehicle breaks down.

5. View Assistance Requests: As a customer, I want to view my submitted requests so that I can keep track of my assistance history.

6. Update Assistance Request: As a customer, I want to edit my request details so that I can correct or update the information.

7. Delete Assistance Request: As a customer, I want to delete a request that I no longer need.

8. View Request Details: As a customer, I want to view the details of an individual request so that I can review its information and status.

## Data Models

The app uses the following MongoDB models:

- User
  - email
  - password
- Car
  - name
  - model
  - year
  - plateNumber
  - owner
- Request
  - description
  - location
  - status
  - problem
  - phoneNumber
  - owner
  - car
- Review
  - text
  - stars
  - request

## Database Design

The database is designed around a relationship-based structure:

- One user can have many cars
- One user can have many roadside assistance requests
- Each request can be linked to a specific car
- Each request can have one review

## Routes

- `/` - Homepage
- `/auth/sign-up` - Create a new account
- `/auth/sign-in` - Login to the app
- `/auth/sign-out` - Sign out
- `/requests` - View all user requests
- `/requests/new` - Create a new request
- `/requests/:requestId` - View a single request
- `/requests/:requestId/edit` - Edit a request
- `/cars` - View saved cars
- `/cars/new` - Register a new car
- `/reviews` - Review-related routes

## Features

## Future Enhancements

- Add admin support for managing all roadside requests
- Include real-time service tracking and status updates
- Add map integration for location detection
- Expand review ratings and filtering
- Improve mobile responsiveness and accessibility

## Credits
