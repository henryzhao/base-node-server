/**
 * 数据处理controller（数据的存储查询等逻辑在此处实现）
 */
const dataWithCModel = require('../../models/datawithc')
const dataWithoutCModel = require('../../models/datawithoutc')
const Constant = require('../../utils/constant')

class dataInfo{

    //存储经纬度数据
    async saveByOne(req, res, next){
        let dataId = req.body.data_id;
        // console.log(dataId)
        dataId = dataId.replace('"','')
        // console.log(dataId)
        let dataLocation = req.body.location.replace('"','')
        // console.log(dataLocation)
        let newData = [{
            data_id: dataId,
            name: req.body.name,
            type: req.body.type,
            location: dataLocation
        }]
        console.log(newData)
        try{
            await dataWithCModel.create(newData)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: '数据添加成功'
            })
        } catch (err) {
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '数据添加失败'+err
            })
        }
    }

    //存储无经纬度信息
    async saveByOneWithoutC(req, res, next){
        let personId = req.body.person_id
        let firstName = req.body.first_name
        let lastName = req.body.last_name
        let race = req.body.race
        let gender = req.body.gender
        let address = req.body.address
        let newData = [{
            person_id: personId,
            first_name: firstName,
            last_name: lastName,
            race: race,
            gender: gender,
            address: address
        }]

        try{
            await dataWithoutCModel.create(newData)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: '数据添加成功',
            })
        }catch (err) {
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '数据添加失败',
            })
        }
    }

    //查询数据带经纬度
    async listWithC(req, res, next){        
        await dataWithCModel.find({},(err, result) => {
            if(err) return console.log(err)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: result
            })
        })        
    }

    //根据数据Id查询数据带经纬度
    async listWithCById(req, res, next){
        let dataId = req.body.data_id
        if(dataId != 0){
            await dataWithCModel.find(
                {
                    data_id: dataId
                },(err, result) => {
                if(err) return console.log(err)
                res.json({
                    code: Constant.RESULT.SUCCESS.code,
                    msg: Constant.RESULT.SUCCESS.msg,
                    data: result
                })
            })
        }
    }
    //查询数据不带带经纬度
    async listWithoutC(req, res, next){
        await dataWithoutCModel.find({},(err, result) =>{
            if(err) return console.log(err)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: result
            })
        })
    }
    //根据数据id来查询不带经纬度数据
    async listWithoutCById(req, res, next){
        let personId = req.body.personId;
        if(personId != 0){
            await dataWithoutCModel.find({
                person_id : personId
            },(err, result) => {
                if(err) return console.log(err)
                res.json({
                    code: Constant.RESULT.SUCCESS.code,
                    msg: Constant.RESULT.SUCCESS.msg,
                    data: result
                })
            })
        }
    }
}

module.exports = new dataInfo 