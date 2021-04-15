//Set up server, http://localhost:3001/.
// Required modules
const express = require('express')
const logger = require('morgan')
const app = express();
// const router = express.Router();
const mongoose = require('mongoose');
const Exercise = require('./models/schema.js');

const PORT = process.env.PORT || 3001;

// Middleware
app.use(logger("dev"));

// user public directory
app.use(express.static('public'));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", { useNewUrlParser: true});

// parse url encoded bodies upon request
express.urlencoded({extended: true});

// Routing paths

// Index
app.get('/', async (req, res) => {
    try{
    const exerciseData = await Exercise.find({});

    res.status(200).json(exerciseData);

    }catch (err){
        if (err) throw err;
        res.status(500).json(err);
    }
});

// Post an entry
app.post

// Listen for server
app.listen(PORT, () => {
    console.log("Server listening on PORT: " + PORT);
}) 