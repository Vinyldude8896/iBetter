const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Habit, Result } = require("../models");
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
      res.render("table", {
        //siblings
        habits,
        results,
        user_id: req.session.user_id,
        username: req.session.username,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;