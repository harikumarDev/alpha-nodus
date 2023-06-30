import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.MONOGO_URI as string)
    .then(() => console.log("DB connection successful"))
    .catch((err) => {
      console.log("Error connecting to DB :: ", err);
      process.exit(1);
    });
};

export default {
  connect,
};
