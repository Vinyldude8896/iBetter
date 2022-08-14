const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Habit, Comment } = require('../models');
const withAuth = require('../utils/auth');

// need withAuth
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================'); 
  Habit.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'habit_title',
      'habit_info',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('my-habits', { posts, loggedIn: true, username: req.session.username });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [      
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model:User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       // serialize the data
//       const post = dbPostData.get({ plain: true });

//       // pass data to template
//       res.render('edit-post', {
//         post,
//         loggedIn: true
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });

// });


// // need add withAuth
// router.get('/', withAuth, (req, res) => {
//   res.render('dashboard', { loggedIn: true });

// });

module.exports = router;