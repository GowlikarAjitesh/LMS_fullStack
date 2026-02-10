const express = require('express');
const { route } = require('./auth-routes');
const authMiddleware = require('../middleware/auth-middleware');
const { userController } = require('../controllers/user-controller');

const router = express.Router();


router.get('/', authMiddleware, userController );

module.exports = router;