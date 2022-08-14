const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Habit } = require("../models");

router.get("/home", (req, res) => {
  console.log(req.session);

  Habit.findAll({
    attributes: [
      "id",
      "habit_title",
      "habit_info",
      // 'created_at', doesn't exist
    ],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((dbHabitData) => {
      const habits = dbHabitData.map((habit) => habit.get({ plain: true }));
      res.render("my-habits-old", {
        habits,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/habit/:id", (req, res) => {
  Habit.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "habit_title",
      "habit_info",
      // 'created_at'
    ],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((dbhabitData) => {
      if (!dbhabitData) {
        res.status(404).json({ message: "No habit found with this id" });
        return;
      }

      // serialize the data
      const habit = dbhabitData.get({ plain: true });

      // pass data to template
      res.render("single-habit", {
        habit,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get(`/my-habits`, (req, res) => {
  Habit.findAll({
    attributes: [
      "id",
      "habit_title",
      "habit_info"
    ],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbHabitData) => {
      const habits = dbHabitData.map((habit) => habit.get({ plain: true }));
      res.render("my-habits", {
        habits,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }

  res.render("testLogin");
});

// router.get('/signup', (req, res) => {

//   res.render('signup');
// });

module.exports = router;
