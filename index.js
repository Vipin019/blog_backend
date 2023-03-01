const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routsurl = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS);

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routsurl);

const port=process.env.PORT ;
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
