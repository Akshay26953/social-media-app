// index.js is starting point of server side application

//importing 
import Express from "express";
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


//api router


// listen