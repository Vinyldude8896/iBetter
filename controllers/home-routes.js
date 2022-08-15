const router = require("express").Router();
const { resourceLimits } = require("worker_threads");
const sequelize = require("../config/connection");
const { User, Habit, Result, Date } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  Habit.findAll({
      where: {
          user_id: req.session.user_id
      },
      attributes: [
          'id',
          'habit_title',
          'habit_info',
          [sequelize.literal('(SELECT COUNT(*) FROM result WHERE habit.id = result.habit_id)'), 'habit_count']
      ],
      include: [
          {
              model: User,
              attributes: ['username']
          },
          {
            model: Result
          }
      ]
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
    where: {
      user_id: req.session.user_id
    },
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
    res.redirect("/");
    return;
  }

  res.render("login-signup");
});

// router.get('/signup', (req, res) => {

//   res.render('signup');
// });

module.exports = router;
