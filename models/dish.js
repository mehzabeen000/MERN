const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    profile: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

var dishes = mongoose.model('dish', dishSchema)
module.exports = dishes;