/**
 * 数据处理子路由
 */
const express = require('express');
const Data = require('../../controller/data/data');
const router = express.Router();

router.post('/save',Data.saveByOne)
router.post('/saveWithout', Data.saveByOneWithoutC)
router.get('/listWithC', Data.listWithC)
router.get('/listWithCById', Data.listWithCById)
router.get('/listWithoutC', Data.listWithoutC)
router.get('/listWithoutCById', Data.listWithoutCById)

module.exports = router