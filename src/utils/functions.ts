import { Seat } from "../models/cinema";

const findConsecutiveSeats = (seats: Seat[], noOfSeats: number) => {
  let count = 0;
  const consecutiveSeats: Seat[] = [];

  for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];

    if (seat.isBooked) {
      consecutiveSeats.length = 0;
      count = 0;
    } else {
      consecutiveSeats.push(seat);
      count++;

      if (count === noOfSeats) {
        break;
      }
    }
  }

  return consecutiveSeats;
};

export { findConsecutiveSeats };
