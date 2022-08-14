const router = require('express').Router();
const { Habit } = require('../../models');
const withAuth = require('../../utils/auth');

//don't need a get all (/) route because we only look at one users habits at a time

//find all habits of a specific user 

//add withAuth, back in later
router.post('/', withAuth, (req, res) => {
    // expects {habit_title: 'Exercise', habit_info: 'Run for 30 minutes'}, gets user id from the current session
    Habit.create({
        habit_title: req.body.habit_title,
        habit_info: req.body.habit_info,
        user_id: req.session.user_id
    })
        .then(dbHabitData => res.json(dbHabitData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
