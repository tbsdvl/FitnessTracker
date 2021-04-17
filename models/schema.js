// Connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Check for connection errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {});

// Example
// type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4

// Create exercise schema
const exerciseSchema = new Schema({

    day: {
        type: Date,
        default: Date.now(),
    },

    exercises: [
        {

        type: {
        type: String,
    },
        name: {
        type: String,
        required: true,
    },
        duration: {
        type: Number,
    },
        weight: {
        type: Number,
    },
        sets: {
        type: Number,
    },
        reps: {
        type: Number,
    },

        }
    ],
});

// TODO: Aggregate functions

// Create exercise model
const Workout = mongoose.model("Exercise", exerciseSchema);

// Export Exercise model
module.exports = Workout;
