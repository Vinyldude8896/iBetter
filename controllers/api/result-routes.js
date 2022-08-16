const router = require("express").Router();
const { Result, DateModel } = require("../../models");
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

router.delete("/:habitId/:dateId", withAuth, async (req, res) => {
  try {
    const { habitId, dateId } = req.params;
    await Result.destroy({
      where: {
        is_completed: true,
        date_id: dateId,
        habit_id: habitId,
        dateId: dateId,
        user_id: req.session.user_id,
      },
      include: [
        {
            model: DateModel,
            attributes: ["date_id"]
        }
      ]
  
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete all results for a user
router.delete("/", withAuth, async (req, res) => {
  try {
    await Result.destroy({
      where: {
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
