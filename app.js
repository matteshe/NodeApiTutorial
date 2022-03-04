const express = require('express')
const app = express()
const morgan = require('morgan')

// bring in routes
const {getPosts} = require('./routes/post');

const myOwnMiddleware = (req, res, next) => { 
    console.log("middleware applied")

    // important to move to the next phase, otherwise the app stuck
    next();
};

// middleware
app.use(morgan('dev'));
app.use(myOwnMiddleware);

app.get('/', getPosts);

const port = 8080

app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`)
});