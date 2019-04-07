const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ussdSchema = new Schema({
    
    number:{
        type: String,
       
    },
    location:{
        type: String,
        
    },
    house_type:{
        type: String,
        
    },
    serviceid:{
        type: String,
        
    },
    servicecode:{
        type: String,       
    },
    phonenumber:{
        type: String,     
    },
    name:{
        type: String,      
    }
})

const ussdModel = mongoose.model('ussdDetails', ussdSchema);

module.exports = ussdModel;