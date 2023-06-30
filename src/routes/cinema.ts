import express from "express";
import Cinema from "../controllers/cinema";

const router = express.Router();

router.post("/", Cinema.create);
router.post("/purchase", Cinema.purchaseSeat);
router.post("/purchase/consecutive", Cinema.purchaseConsecutiveSeats);

export default router;
