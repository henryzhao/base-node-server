const mongoose = require('mongoose');
const dbUrl = 'mongodb://zhongshanpark.com.cn:27017/base-node-server'


exports.connect = () => {
    mongoose.connect(dbUrl, (err) => {
        if(err){
            console.log('数据库连接失败');
        }else{
            console.log('数据库连接成功');
        }
    })
}