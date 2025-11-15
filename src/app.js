const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "products_db"
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "products-microservice" });
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, price FROM products;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error querying products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Products microservice running on port ${PORT}`);
});
