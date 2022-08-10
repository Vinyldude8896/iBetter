const router = require('express').Router();
const { User } = require('../../models');

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
})

router.post('/login', async (req, res) => {
    try {
        const {body : { username, password}} = req
        const userInfo = await User.findOne({
            where: {
                username
            }
        })
        const validatePassword = await userInfo.checkPassword(password)
        
        !userInfo || !validatePassword ? 
            res.status(400).json({message: 'Incorrect email or password! Please try again!'}):
            req.session.save(() => {
                req.session.loggedIn = true
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

module.exports = router;