/**
 * 用户controller（例如登录、注册等操作逻辑在此实现）
 */
const UserModel = require('../../models/userinfo')
const Constant = require('../../utils/constant')
const jwt = require('jsonwebtoken') // 使用jwt签名
//时间格式化模块
const dtime = require('time-formater');

class user {

    //注册用户
    async register(req, res, next) {
        let username = req.body.username;
        let userpassword = req.body.userpassword;
        let email = req.body.email
        try {
            const userinfo = {
                user_name: username,
                user_password: userpassword,
                email: email,
                create_time: dtime().format('YYYY-MM-DD HH:mm')
            }
            console.log(userinfo.create_time)
            await UserModel.create(userinfo)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: '注册成功',
            })
        } catch (err) {
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '注册失败',
            })
        }

    }

    // 用户登录
    async login(req, res, next){
        let username = req.body.username
        let userpassword = req.body.userpassword
        if(!user){
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '认证失败，用户名找不到'
            })
        }
        try{
            const userinfo = {
                user_name: username,
                user_password: userpassword
            }
            await UserModel.count(userinfo, function(err, user){
                if(user==1){// 验证成功
                    // var token = jwt.sign(user, 'app.get(superSecret)',{
                    //     expiresIn: 60*60*24 //设置过期时间
                    // })
                    res.json({
                        code: Constant.RESULT.SUCCESS.code,
                        msg: Constant.RESULT.SUCCESS.msg,
                        data: '登录成功',
                        // token: token
                    })
                }
            })
        }catch(err){
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '登录失败'
            })
        }
    }
    async logout(req, res, next){
        req.session.destroy(function(err){
            if(err){
                res.json({
                    code: Constant.RESULT.FAILD.code,
                    msg: Constant.RESULT.FAILD.msg,
                    data: '退出失败'
                })
            }else{
                res.json({
                    code: Constant.RESULT.SUCCESS.code,
                    msg: Constant.RESULT.SUCCESS.msg,
                    data: '退出成功'
                })
            }
        })
    }

}


module.exports = new user()