const express = require('express');
const {registerController, loginController} = require('../controllers/auth-controller');
const AuthMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);

router.get('/check-auth', AuthMiddleware, (req, res) => {
    const data = req.user;
    console.log('Auth is verified');
    res.status(200).json({
        success: true,
        message: 'Authentication Sucessful',
        data: data
    })
})

module.exports = router;