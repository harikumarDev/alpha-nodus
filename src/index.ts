import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connecting to mongodb
db.connect();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
