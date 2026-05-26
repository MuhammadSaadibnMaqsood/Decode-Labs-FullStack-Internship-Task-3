import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";

// Initialize dotenv
dotenv.config();

const app = express();
connectDb();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("DECODELABS - TASK-3");
});

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});