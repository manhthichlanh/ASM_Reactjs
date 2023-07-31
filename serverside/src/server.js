import express from 'express';

import cors from 'cors';
// var cors = require('cors')
import configViewEngine from './configs/viewEngine';
import initAdminRoute from './route/adminRoute';
import configSession from './configs/session';
import configCookie from './configs/cookie';
import {config} from "dotenv";
// require('dotenv').config();

config();

const app = express();

app.use(cors());
const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions));

//Storages
configSession(app);

configCookie(app);
//Storages

const port = process.env.PORT || 8080;
// const path = require('path');
// const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setup view engine
configViewEngine(app);

// init admin route
initAdminRoute(app);

// //init user route
// initUserRoute(app);

// //init category route
// initCategoryRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})