# Ticket Manager

Ticket Manager is a web application for managing event bookings. Users can book tickets for events, and if tickets are sold out, they will be added to a waiting list. Users can also cancel their bookings, and the system will reassign the ticket to the next user in the waiting list.

## Features

- User authentication and authorization
- Event booking
- Waiting list management
- Booking cancellation

## Prerequisites

- node.js
- npm

## Setup and Running

#### 1. Clone the repository

```sh
git clone https://github.com/yasirunilan/online-ticket-app-js
cd online-ticket-app-js
```

#### 2. Install dependencies

```sh
npm install
```

#### 3. Setup Environment Variable in a .env file if needs to be different from configuration mentioned in src/config/config.js. By default it will use the configuration specified in the src/config/config.js file

#### 4. Run Migrations

```sh
 npm run db:migrate
```

#### 5. Run Seeders to add 10 default users to the database

```sh
 npm run db:seed
```

#### 6. Start the application

```sh
 npm start
```

#### 7. Run Unit Tests

```sh
 npm test
```




## API Documentation

The API documentation is available at http://localhost:3000/api/v1/docs when the application is running. The documentation is generated using Swagger.