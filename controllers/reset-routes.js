const router = require("express").Router();
const { User, Habit, Result, DateModel } = require("../models");

router.delete("/user/result", (req, res) => {
  Result.destroy({
    where: {
      user_id: req.session.user_id
    }
  }).then(dbHabitData => {
    if (!dbHabitData) {
      res.status(404).json({ message: 'No habit found with this id' });
      return;
    }
    res.json(dbHabitData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete("/user/habit", (req, res) => {
  Habit.destroy({
    where: {
      user_id: req.session.user_id
    }
  }).then(dbHabitData => {
    if (!dbHabitData) {
      res.status(404).json({ message: 'No habit found with this id' });
      return;
    }
    res.json(dbHabitData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;