const router = require("express").Router();
const { entries } = require("lodash");
const { Habit, Result } = require("../../models");
const withAuth = require("../../utils/auth");

//don't need a get all (/) route because we only look at one users habits at a time

//find all habits of a specific user

//add withAuth, back in later
//making a big function to create all the info we need for the chart when we make a new habit
router.post("/", (req, res) => {
  // expects {habit_title: 'Exercise', habit_info: 'Run for 30 minutes'}, gets user id from the current session
  Habit.create({
    habit_title: req.body.habit_title,
    habit_info: req.body.habit_info,
    user_id: req.session.user_id
  })
    .then((dbHabitData) => res.json(dbHabitData))
    .then(
      Habit.findAll({
        limit: 1,
        order: [["created_At", "DESC"]],
      }).then(function (entries) {
        return entries[0];
      })
    )
    .then(() => {
      for (i = 0; i > 31; i++) {
        Date.create({
          date: [i],
          habit_id: entries[0].id,
        });
      }
    })
    .then(
      Result.create({
        is_completed: req.body.is_completed,
        habit_id: entries[0].id,
        date_id: req.body.date_id,
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
