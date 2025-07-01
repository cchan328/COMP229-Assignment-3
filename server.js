//import express from "express";
//var express = require("express");
//var app = express();
import app from "./server/express.js";
import router from "./server/assets-router.js";
import mongoose from 'mongoose';
//const assetsRouter = require("./server/assets-router");
app.use("/src", router);
app.use("/", function (req, res) {
  res.send("Welcome to My Portfolio application");
});
app.listen(3000);
console.log("Server running at http://localhost:3000/");

mongoose.connect('mongodb+srv://ccyccyccy2000:JH9YN04IXJ57Ky9n@portfolio.dg4mg4l.mongodb.net/portfolio?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

//module.exports = app;
export default app;

