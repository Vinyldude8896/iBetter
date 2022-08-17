const router = require('express').Router();
const { User, Habit, Result } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require("../../config/connection");

router.get('/', (req, res) => {
  console.log(req.session);
  Habit.findAll({
      attributes: [
          'id',
          'habit_title',
          'habit_info'
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
  .then(dbHabitData => res.json(dbHabitData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/user', (req, res) => {
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
          attributes: ['id', 'username']
        }
      ]
    }).then(dbHabitData => {
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

router.put('/:id', withAuth, (req, res) => {
    Habit.update(
      {
        habit_title: req.body.habit_title,
        habit_info: req.body.habit_info
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbHabitData => {
        if (!dbHabitData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbHabitData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', withAuth, (req, res) => {
    Habit.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbHabitData => {
        if (!dbHabitData) {
          res.status(404).json({ message: 'No habit found with this id' });
          return;
        }
        res.json(dbHabitData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  
module.exports = router;