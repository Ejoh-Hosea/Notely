import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
dotenv.config();

import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(ratelimiter);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
  });
});
