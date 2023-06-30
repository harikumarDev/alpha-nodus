import mongoose, { Document } from "mongoose";

export interface Seat {
  number: number;
  isBooked: boolean;
}

export interface ICinema extends Document {
  name: string;
  seats: Seat[];
}

const cinemaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seats: [
    {
      number: {
        type: Number,
        required: true,
      },
      isBooked: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const cinemaModel = mongoose.model<ICinema>("Cinema", cinemaSchema);

export default cinemaModel;
