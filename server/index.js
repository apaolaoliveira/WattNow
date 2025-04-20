const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

app.get("/", (req, res) => {
  res.send("API backend working!");
});

const trashRoutes = require("./routes/trash");
app.use("/api", trashRoutes);

const profileRoutes = require("./routes/profile");
app.use("/api", profileRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🔥 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error MongoDB:", err));
