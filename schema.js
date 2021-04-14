// Connect to mongodb
const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/exercise', {useNewUrlParser: true, useUnifiedTopology: true});

// Check for connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

});

// Create exercise schema
const exerciseSchema = new Schema({

        name: {type: String},
        type: {type: String},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number},
        time: {type: Number}

});

// Create exercise model
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Create new exercise document

const newEntry = new Exercise(
    { "name": "Bench Press"},
    {"type": "Chest"},
    {"weight": 100},
    {"reps": 4},
    {"time": 60}
)

// Show new document's data
console.log(newEntry);

// Export Exercise model
module.exports = Exercise;