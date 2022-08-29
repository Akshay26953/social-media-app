// index.js is starting point of server side application

//importing 
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";


// app config
const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//db config
const CONNECTION_URL = "mongodb+srv://akshaykh1:8898413303@cluster0.vpq91gx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 7000;
mongoose.connect(CONNECTION_URL)
.then(()=>{console.log("DB connected successfully")})
.catch((err)=> {console.log(err, "Error in DB connction")});

//api router


// listen
app.listen(PORT, ()=> {console.log(`Server running at port: ${PORT}`)})