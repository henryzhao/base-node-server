/**
 * 用户子路由
 */
const express = require('express');
const User = require('../../controller/user/user');
const router = express.Router();

/**
 * @api {post} /api/user/register 用户注册
 * @apiDescription 用户注册
 * @apiName register
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} userpassword 密码
 * @apiParam {String} email 电子邮箱
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: '注册成功'
 *  }
 * @apiSampleRequest http://localhost:3390/api/user/register
 * @apiVersion 1.0.0
 */
router.post('/register',User.register)

/**
 * @api {post} /api/user/login 用户登录
 * @apiDescription 用户登录
 * @apiName user-login
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} userpassword 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: '登录成功',
 *      token: token
 *  }
 * @apiSampleRequest http://localhost:3390/api/user/login
 * @apiVersion 1.0.0
 */
router.post('/login',User.login)

/**
 * @api {post} /api/user/logout 用户注销
 * @apiDescription 用户注销
 * @apiName logout
 * @apiGroup User
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: '退出成功'
 *  }
 * @apiSampleRequest http://localhost:3390/api/user/logout
 * @apiVersion 1.0.0
 */
router.get('/logout',User.logout)

module.exports = router