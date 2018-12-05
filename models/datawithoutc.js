/**
 * @type 数据库model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataWithoutCSchema = new Schema({
    person_id: Number,
    first_name: String,
    last_name: String,
    race: String,
    gender: String,
    address: String
})

//建立索引  提高查询效率
dataWithoutCSchema.index({person_id: 1})

const datawithoutcModel = mongoose.model('datawithoutc', dataWithoutCSchema);

module.exports = datawithoutcModel