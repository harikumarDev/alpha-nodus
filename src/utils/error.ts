import { Response, NextFunction } from "express";

class CustomError extends Error {
  constructor(message: string, public readonly code: Number) {
    super(message);
  }
}

const returnError = (
  res: Response,
  next: NextFunction,
  message: string,
  code = 400
) => {
  res.status(code).json({
    success: false,
    message,
  });

  return next(new CustomError(message, code));
};

export default returnError;
