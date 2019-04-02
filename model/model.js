const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ussdSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    house_type: {
        type: String,
        required: true
    },
    serviceid:{
        type: String,
        required: true
    },
    servicecode:{
        type: String,
        required: true
    },
    phonenumber:{
        type: String,
        required: true
    }
})

const ussdModel = mongoose.model('ussdDetails', ussdSchema);

module.exports = ussdModel;