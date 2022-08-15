const router = require("express").Router();
const { Result } = require("../../models");
const withAuth = require("../../utils/auth");

//initial check
//add witAuth back in after
//if user changes the status (unchecks/rechecks)
router.put("/:id", withAuth, (req, res) => {
  Result.update(
    {
      is_completed: req.body.is_completed,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbHabitData) => {
      if (!dbHabitData) {
        res.status(404).json({ message: "No habit found with this id" });
        return;
      }
      res.json(dbHabitData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, async (req, res) => {
  try {
    const { habitId, dateId } = req.body;
    await Result.create({
      is_completed: true,
      date_id: dateId,
      habit_id: habitId,
      user_id: req.session.user_id,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:habitId", withAuth, async (req, res) => {
  try {
    const { habitId } = req.params;
    await Result.destroy({
      where: {
        is_completed: true,
        habit_id: habitId,
        user_id: req.session.user_id,
      },
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
