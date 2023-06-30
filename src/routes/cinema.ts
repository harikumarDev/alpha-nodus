import express from "express";
import Cinema from "../controllers/cinema";

const router = express.Router();

router.post("/", Cinema.create);
router.post("/:id", Cinema.purchaseSeat);
router.post("/:id/consecutive", Cinema.purchaseConsecutiveSeats);

export default router;
