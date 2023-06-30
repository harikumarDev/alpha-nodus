# Cinema Ticket Booking System
## Introduction
Web API built using Node with Typescript for cinema Ticket Booking.

## Installation
To install the dependencies, run the following command:
```bash
npm install
```

### Provide environment variables by creating a .env file in root directory
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/cinemas
```

## Running the app
To run the app, run the following command:
```bash
npm run dev
```

# API Documentation

## Creating a new Cinema
To create a new cinema, send a POST request to the following endpoint:
```bash
http://localhost:5000/api/cinema
```
with the `name` and `seats` (no.of seats) of the cinema in the request body.

### Example
```bash
{
    "name": "Cinema 1",
    "seats": 100
}
```

## Purchasing a ticket
To purchase a ticket, send a POST request to the following endpoint:
```bash
http://localhost:5000/api/cinema/:cinemaId
```
along with the seat number in the request body.
### Example
```bash
{
    "seat": 1
}
```

## Purchasing multiple (consecutive) tickets
To purchase multiple consecutive tickets, send a POST request to the following endpoint:
```bash
http://localhost:5000/api/cinema/:cinemaId/consecutive
```
along with the number of seats in the request body.
### Example
```bash
{
    "seats": 2
}
```
