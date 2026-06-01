import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;  // Use PORT from .env or default to 4000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});