# Project Name

## Overview

## Screenshots

## Technologies Used

## Getting Started

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

models:

1. User
2. Request: issue, time of day, road you are on, isEmergency,
3. Car
4. Review: stars, text

## Database Design

## Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /                  | Home page         |
| GET    | /listings          | List all listings |
| GET    | /listings/new      | New listing form  |
| POST   | /listings          | Create listing    |
| GET    | /listings/:id      | View listing      |
| GET    | /listings/:id/edit | Edit listing form |
| PUT    | /listings/:id      | Update listing    |
| DELETE | /listings/:id      | Delete listing    |

## Features

## Future Enhancements

## Credits
