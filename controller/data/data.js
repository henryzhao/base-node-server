/**
 * 数据处理controller（数据的存储查询等逻辑在此处实现）
 */
const dataWithCModel = require('../../models/datawithc')
const dataWithoutCModel = require('../../models/datawithoutc')

class dataInfo{

    //存储数据
    async saveByOne(req, res, next){
        let newData = [{
            data_id: req.body.data_id,
            name: req.body.name,
            location: req.body.location
        }]
        try{
            await dataWithCModel.create(newData)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: '数据添加成功',
            })
        } catch (err) {
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '数据添加失败',
            })
        }
    }
}

module.exports = new dataInfo