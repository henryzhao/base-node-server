/**
 * @type 数据库model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataWithCSchema = new Schema({
    data_id: Number,
    name: String,
    type: String,
    location:{
        type :[Number],
        index :{
            type: '2dsphere',
            sparse: true
        }
    }
},{
    collection: 'datawithc'
})

// //建立索引  提高查询效率
// dataWithCSchema.index({data_id: 1})

const datawithcModel = mongoose.model('datawithc', dataWithCSchema);

module.exports = datawithcModel