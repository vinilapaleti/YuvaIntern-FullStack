const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World from YuvaIntern Backend!"
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World from YuvaIntern Backend!"
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});