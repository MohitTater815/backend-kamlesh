// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from Backend!",
    timestamp: new Date(),
  });
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
