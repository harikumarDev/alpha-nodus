import { Request, Response, NextFunction } from "express";
import Cinema, { Seat } from "../models/cinema";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import error from "../utils/error";
import { findConsecutiveSeats } from "../utils/functions";

const create = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, seats } = req.body;

    if (!(name && seats)) {
      return error(res, next, "Name and no.of seats are required");
    }

    if (typeof seats !== "number") {
      return error(res, next, "Seats must be a number");
    }

    const seatsArray: Seat[] = [];

    for (let i = 1; i <= seats; i++) {
      seatsArray.push({
        number: i,
        isBooked: false,
      });
    }

    const cinema = await Cinema.create({
      name,
      seats: seatsArray,
    });

    res.status(201).json({
      success: true,
      cinemaId: cinema._id,
    });
  }
);

const purchaseSeat = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: cinemaId } = req.params;
    const { seatNumber } = req.body;

    if (!(seatNumber && cinemaId)) {
      return error(res, next, "Cinema Id and Seat number are required");
    }

    const cinema = await Cinema.findById(cinemaId);

    if (!cinema) {
      return error(res, next, "Cinema not found", 404);
    }

    const seat = cinema.seats.find(
      (seat) => seat.number === parseInt(seatNumber)
    );

    if (!seat) {
      return error(res, next, "Seat not found", 404);
    }

    if (seat.isBooked) {
      return error(res, next, "Seat is already booked");
    }

    seat.isBooked = true;

    await cinema.save();

    res.status(200).json({
      success: true,
      seat,
    });
  }
);

const purchaseConsecutiveSeats = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: cinemaId } = req.params;
    const { seats } = req.body;

    if (!(seats && cinemaId)) {
      return error(res, next, "Cinema Id and no.of seats are required");
    }

    const cinema = await Cinema.findById(cinemaId);

    if (!cinema) {
      return error(res, next, "Cinema not found", 404);
    }

    const consecutiveSeats = findConsecutiveSeats(cinema.seats, seats);

    if (consecutiveSeats.length < seats) {
      return error(res, next, "Seats not available");
    }

    consecutiveSeats.forEach((seat) => {
      seat.isBooked = true;
    });

    await cinema.save();

    res.status(200).json({
      success: true,
      consecutiveSeats,
    });
  }
);

export default {
  create,
  purchaseSeat,
  purchaseConsecutiveSeats,
};
