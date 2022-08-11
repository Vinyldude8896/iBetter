const router = require('express').Router();
const { User, Habit } = require('../../models');


// GET /api/users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Habit,
        attributes: ['id', 'habit_title', 'habit_info', 'user_id', 'created_at']
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST /api/users
router.post('/', async (req, res) => {
    const {body : { username, password, email}} = req
    try {
        const userInfo = await User.create({
            username,
            email,
            password
        })

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userInfo)
        })
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
}) .then(dbUserData => {
  req.session.save(() => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;

    res.json(dbUserData);
  });
})

router.post('/login', async (req, res) => {
    try {
        const {body : { id, username, password}} = req
        const userInfo = await User.findOne({
            where: {
                email
            }
        })
        const validatePassword = await userInfo.checkPassword(password)
        
        !userInfo || !validatePassword? 
            res.status(400).json({message: 'Incorrect email and password! Please try again!'}):
        !userInfo? 
            res.status(400).json({message: 'Incorrect email! Please try again!'}):
        !validatePassword? 
            res.status(400).json({message: 'Incorrect password! Please try again!'}):
            req.session.save(() => {
                req.session.user_id = id;
                req.session.username = username;
                req.session.loggedIn = true;
                res.status(200).json({ user: userInfo, message: 'Login successful!'})
            })
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
})

router.post('/logout', (req, res) => {
    req.session.loggedIn ?
        req.session.destroy(() => {
            res.status(204).end()
        }):
        res.status(404).end
})

// PUT /api/users/1
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;