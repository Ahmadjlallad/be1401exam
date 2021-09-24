const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
mongoose.connect(process.env.DP_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => console.log("connected to database"));
db.on("error", (err) => console.log(err));
const {
  digimonDATA,
  getDid,
  updateDid,
  deleteDid,
  createDid,
} = require("./Crud");
//  to do create the schema done
// get from the api and then send to the user
app.get("/didapi", digimonDATA);
app.get("/did", getDid);
app.post("/did", createDid);
app.put("/did/:id", updateDid);
app.delete("/did/:id", deleteDid);
// app.delete("/did/:id", (req,res)=>{
//     req.
// });
app.listen(process.env.PORT, () => console.log("server is running"));
