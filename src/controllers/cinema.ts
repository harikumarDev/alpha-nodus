import { Request, Response, NextFunction } from "express";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import error from "../utils/error";

const create = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "Create",
    });
  }
);

const purchaseSeat = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "Purchase",
    });
  }
);

const purchaseConsecutiveSeats = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "Purchase consecutive",
    });
  }
);

export default {
  create,
  purchaseSeat,
  purchaseConsecutiveSeats,
};
