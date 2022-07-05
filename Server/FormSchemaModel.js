let mongoose = require('mongoose')

let feedbackForm = new mongoose.Schema({
    feedFrom:{
        type:String,
        required: true,
        
    },
    feedTo:{
        type:String,
        required: true,
        
    },
    date:{
        type:String,
        required: true,
        
    },
    feedDesc:{
        type:String,
        required: true,
        
    }
})

module.exports = mongoose.model('feedbackForms',feedbackForm)