

const mongoose = require('mongoose')

const itemschema = new mongoose.Schema({
    item:{
        type:String,
        required:true
     }
     //,
    // price:{
    //     type:Number,
    //     required:true
    // }

})

module.exports=mongoose.model('item',itemschema)