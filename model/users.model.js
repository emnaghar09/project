const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
{
fullname:{type: String, required: true, unique: true},
email:{type: String, required: true, unique: true},
age: { type:Number},
password:{type: String, required: true},
role:[
{type:Schema.Types.ObjectId, ref: 'Role'}
]
}
);

module.exports = mongoose.model('User', userSchema)