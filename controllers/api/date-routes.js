const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Habit, User, Result, Date } = require('../../models');

 //find all habits of a specific user 
router.get('/date', (req, res) => {
    Habit.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'habit_title', 'habit_info', 'user_id'],
    })
        .then(dbHabitData => {
            if (!dbHabitData) {
                res.status(404).json({ message: 'No habits found for this user' });
                return;
            }
            res.json(dbHabitData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});