const express = require("express");
const cors = require("cors");
require("dotenv").config();

const indexRoutes = require("./routes/indexRoutes");
const chatRoutes = require("./routes/chatRoutes");
const app = express();
const PORT = 4800;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);
app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
