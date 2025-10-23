import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

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

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
