const router = require("express").Router();
const { Workout } = require("../models");

// Fetch workout data in database
router.get("/workouts", async (req, res) => {
    // Sum up the time of exercises 
  const workouts = await Workout.aggregate([
    {
      $set: {
        sumTime: {
          $sum: "$exercises.duration",
        },
      },
    },
  ]);
  res.json(workouts);
});

router.put("/workouts/:id", async (req, res) => {});

router.post("/workouts/", async (req, res) => {});

router.get("/workouts/range", async (req, res) => {});

module.exports = router;
