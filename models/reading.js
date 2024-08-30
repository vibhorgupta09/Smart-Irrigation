const { required } = require('joi');
const mongoose = require('mongoose');

const readingSchema= new mongoose.Schema({
    readingVal:{
        type:Number,
        required:true,
        comment:"reading of tentiometer in centibar"
    },
    output:String,
    date:{
        type:Date,
        default:Date.now()
    },
    feedback:String,
});

const Reading= mongoose.model("Reading",readingSchema);

module.exports=Reading;