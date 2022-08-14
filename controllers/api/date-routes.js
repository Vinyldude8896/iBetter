const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Habit, User, Result, Date } = require('../../models');

// commented to see if I can find all dates
//find all habits of a specific user 
// router.get('/', (req, res) => {
//     Habit.findAll({
//         where: {
//             user_id: req.session.user_id
//         },
//         attributes: ['id', 'habit_title', 'habit_info', 'user_id'],
//     })
//         .then(dbHabitData => {
//             if (!dbHabitData) {
//                 res.status(404).json({ message: 'No habits found for this user' });
//                 return;
//             }
//             res.json(dbHabitData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


 //find all dates in table
 router.get('/', (req, res) => {
    // console.log(req.session);
    console.log('======================');
        Date.findAll({
        })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          })
      });

 //find date that matches the ID provided
 router.get('/:id', (req, res) => {
    Date.findAll({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'date', 'created_at', 'updated_at'],
    })
        .then(dbDateData => {
            if (!dbDateData) {
                res.status(404).json({ message: 'No dates found' });
                return;
            }
            res.json(dbDateData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

 //find date that matches the date string provided
 router.get('/:date', (req, res) => {
    Date.findAll({
        where: {
            date: req.params.date
        },
        attributes: ['id', 'date', 'created_at', 'updated_at'],
    })
        .then(dbDateData => {
            if (!dbDateData) {
                res.status(404).json({ message: 'No dates found' });
                return;
            }
            res.json(dbDateData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;