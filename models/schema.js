// Connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for connection errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {});

// type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4

// Create exercise schema
const exerciseSchema = new Schema({
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
});

// TODO: Aggregate functions

// Create exercise model
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Export Exercise model
module.exports = Exercise;
