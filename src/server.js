
import express from "express";
import configViewEngine from "./config/viewEngine"
import initWebRoute from "./route/web";
import cookieParser from "cookie-parser";

var bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





//setup view engine
configViewEngine(app)

//init webRoute
initWebRoute(app)



app.listen(port)