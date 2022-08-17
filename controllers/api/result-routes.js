const router = require("express").Router();
const { Result, DateModel } = require("../../models");
const withAuth = require("../../utils/auth");

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
        date_Id: dateId,
        user_id: req.session.user_id,
      },
<<<<<<< HEAD
      // include: [
      //   {
      //       model: DateModel,
      //       attributes: ["date_id"]
      //   }
      // ]
=======
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
>>>>>>> a9ad597eb8590fe30a5be6a49f78e9880f8c41bb
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
