const router = require('express').Router();
const { Result } = require('../../models');
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

router.post('/', withAuth, (req, res) => {
    Result.create(
        {
            is_completed: req.body.is_completed
        }
    )
        .then(dbHabitData => res.json(dbHabitData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;