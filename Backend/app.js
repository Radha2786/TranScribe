const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config();

const app = express();

const { db } = require('./db/db');

const port = process.env.PORT;
console.log('PORT from .env:', port); // Add this line for additional logging

// middleares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());



// routes
app.get('/', (req, res) => {
    res.send("Welcome to Transcribe");
});


db();
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
