const router = require('express').Router();
const { Date } = require('../../models');

 //find all habits of a specific user 
router.get('/date', (req, res) => {
    Date.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'date'],
    })
        .then(dbHabitData => {
            if (!dbHabitData) {
                res.status(404).json({ message: 'No dates found for this user' });
                return;
            }
            res.json(dbHabitData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// 