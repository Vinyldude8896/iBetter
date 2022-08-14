const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Habit, User, Date, Result } = require('../../models');
const withAuth = require('../../utils/auth');


 //find all dates in table
 router.get('/', (req, res) => {
    // console.log(req.session);
    console.log('======================');
        Result.findAll({
        })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          })
      });


//initial check
//add witAuth back in after

router.post('/', (req, res) => {
    Result.create(
        {
            is_completed: req.body.is_completed,
            habit_id: req.body.habit_id,
            date_id: req.body.date_id
        },
        // {
        //     where: {
        //         id: req.params.id
        //     }
        // }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//if user changes the status (unchecks/rechecks)
router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// this route is to delete a post where the ID matches
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Result.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
module.exports = router;