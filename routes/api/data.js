/**
 * 数据处理子路由
 */
const express = require('express');
const Data = require('../../controller/data/data');
const router = express.Router();


/**
 * @api {post} /api/data/save 存入单条带经纬度的数据
 * @apiDescription 存入单条带经纬度的数据
 * @apiName save
 * @apiGroup Data
 * @apiParam {int} data_id data_id
 * @apiParam {string} name name
 * @apiParam {string} type type
 * @apiParam {double[]} location [double,double]
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: '数据添加成功'
 *  }
 * @apiSampleRequest http://localhost:3390/api/data/save
 * @apiVersion 1.0.0
 */
router.post('/save',Data.saveByOne)
/**
 * @api {post} /api/data/saveWithout 存入单条不带经纬度的数据
 * @apiDescription 存入单条不带经纬度的数据
 * @apiName saveWithout
 * @apiGroup Data
 * @apiParam {int}  person_id 人员编号
 * @apiParam {string} first_name first_name
 * @apiParam {string} last_name last_name
 * @apiParam {string} race race
 * @apiParam {string} gender gender
 * @apiParam {string} address address
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: '数据添加成功'
 *  }
 * @apiSampleRequest http://localhost:3390/api/data/saveWithout
 * @apiVersion 1.0.0
 */
router.post('/saveWithout', Data.saveByOneWithoutC)
/**
 * @api {get} /api/data/listWithC 查询所有带经纬度信息的数据
 * @apiDescription 查询所有带经纬度信息的数据
 * @apiName listWithC
 * @apiGroup Data
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: result
 *  }
 * @apiSampleRequest http://localhost:3390/api/data/listWithC
 * @apiVersion 1.0.0
 */
router.get('/listWithC', Data.listWithC)
/**
 * @api {get} /api/data/listWithCById 通过Id查询带经纬度信息的数据
 * @apiDescription 通过Id查询带经纬度信息的数据
 * @apiName listWithCById
 * @apiGroup Data
 * @apiParam {int} data_id
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: result
 *  }
 * @apiSampleRequest http://localhost:3390/api/data/listWithCById
 * @apiVersion 1.0.0
 */
router.get('/listWithCById', Data.listWithCById)
/**
 * @api {get} /api/data/listWithoutC 查询所有位置数据
 * @apiDescription 查询所有位置数据
 * @apiName listWithoutC
 * @apiGroup Data
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: result
 *  }
 * @apiSampleRequest http://localhost:3390/api/data/listWithoutC
 * @apiVersion 1.0.0
 */
router.get('/listWithoutC', Data.listWithoutC)
/**
 * @api {get} /api/data/listWithoutCById 通过Id查询位置数据
 * @apiDescription 通过Id查询位置数据
 * @apiName listWithoutCById
 * @apiGroup Data
 * @apiParam {int} personId
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: Constant.RESULT.SUCCESS.code,
 *      msg: Constant.RESULT.SUCCESS.msg,
 *      data: result
 *  }
 * @apiSampleRequest http://localhost:3390/api/data/listWithoutCById
 * @apiVersion 1.0.0
 */
router.get('/listWithoutCById', Data.listWithoutCById)

module.exports = router