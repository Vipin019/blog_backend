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

// app.get('/api',(req,res)=>{
//     console.log("Get request")
//     res.send("Success!")
// })

// app.post('/api',(req,res)=>{
//     console.log("Post request")
//     res.send("Success!")
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
