/**
 * 用户子路由
 */
const express = require('express');
const User = require('../../controller/user/user');
const router = express.Router();

router.post('/register',User.register)
router.post('/login',User.login)
router.get('/logout',User.logout)

module.exports = router