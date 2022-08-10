const router = require('express').Router();
// const sequelize = require('../config/connection');
// const {Post, User, Comment} = require('../models');

// this route will get all the posts for the homepage and render the hompage handlebars
router.get('/', (req, res) => {
    console.log('============================');
    // Post.findAll({
        // attributes: [
        //     'id',
        //     'title',
        //     'body',
        //     'created_at',
        // ],
    //     include: [
    //         {
    //             model: Comment,
    //             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //             include: {
    //                 model: User,
    //                 attributes: ['username']
    //             }
    //         },
    //         {
    //             model: User,
    //             attributes: ['username']
    //         }
    //     ]
    // })
    // .then(dbPostData => {
    //     const posts = dbPostData.map(post => post.get({plain: true}));

        res.render('homepage', {
            // posts,
            // loggedIn: req.session.loggedIn
        });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    });

    // this route will get all the posts for the homepage and render the hompage handlebars
router.get('/Enter_Progress', (req, res) => {
    console.log('============================');
        res.render('enter_progress', {
    });
});

    module.exports = router;