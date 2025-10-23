import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/items", itemRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Selamat datang di API Cuci Sepatu",
    endpoints: {
      items: "/items",
      byId: "/items/:id",
    },
  });
});

// Export app ke Vercel
export default app;
