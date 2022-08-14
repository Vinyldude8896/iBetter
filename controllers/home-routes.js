const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Habit } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);

  Habit.findAll({
    attributes: [
      'id',
      'habit_title',
      'habit_info',
      'created_at',
    ],
    include: {
      model: User,
      attributes: ['username']
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
  Habit.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'habit_title',
      'habit_info',
      'created_at'
    ],
    include: {
      model: User,
      attributes: ['username']
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { 
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Enter_Progress', (req, res) => {
    res.render('enter_progress');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('testLogin');
})

// router.get('/signup', (req, res) => {

//   res.render('signup');
// });

module.exports = router;