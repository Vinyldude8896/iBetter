const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Habit, Result, DateModel } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const resultsData = await Result.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: DateModel,
        },
        {
          model: Habit,
        },
      ],
    });
    const habitsData = await Habit.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        "id",
        "habit_title",
        "habit_info",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM result WHERE habit.id = result.habit_id)"
          ),
          "habit_count",
        ],
      ],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const habits = habitsData.map((habit) => habit.get({ plain: true }));
    const results = resultsData.map((result) => result.get({ plain: true }));
    // console.log(">>>>", results);
    res.render("home", {
      //siblings
      habits,
      results,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/my-habits/edit/:id", withAuth, (req, res) => {
  Habit.findByPk(req.params.id, {
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "habit_title",
      "habit_info",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM result WHERE habit.id = result.habit_id)"
        ),
        "habit_count",
      ],
    ],
  })
    .then((dbHabitData) => {
      if (dbHabitData) {
        const habit = dbHabitData.get({ plain: true });
        res.render("edit-habit", {
          habit,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get(`/my-habits`, withAuth, (req, res) => {
  Habit.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "habit_title", "habit_info"],
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

module.exports = router;
