const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Habit, User, Date, Result } = require('../../models');
const withAuth = require('../../utils/auth');

//initial check
//add witAuth back in after

//if user changes the status (unchecks/rechecks)
router.put('/:id', withAuth, (req, res) => {
    Result.update(
        {
            is_completed: req.body.is_completed
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


module.exports = router;