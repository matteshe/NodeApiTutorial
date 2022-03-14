// import express web server
const express = require('express')
const app = express()
const morgan = require('morgan')

// import body-parser lib to parse the response content
const bodyParser = require('body-parser')

// import express-validator lib to validate request inputs
const expressValidator = require('express-validator')

// import mongoose lib to access mongoDB
const mongoose = require('mongoose')

// load env variables
const dotenv = require('dotenv');
dotenv.config()


// db
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))

mongoose.connection.on('error', err => console.log(`DB connection error: ${err.message}`))

// bring in routes
const postRoutes = require('./routes/post');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);

const port = 8080

app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`)
});