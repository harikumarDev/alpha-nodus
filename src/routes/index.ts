import express from "express";

import cinema from "./cinema";

const router = express.Router();

router.use("/cinema", cinema);

export default router;
