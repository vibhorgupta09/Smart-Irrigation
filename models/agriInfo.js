const { ref } = require('joi');
const mongoose = require('mongoose');
const Reading=require("./reading.js");

const agriInfoSchema= new mongoose.Schema({
    cropName:{
        type: String,
        required:true
    },
    soil:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    irrigationSystem:{
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    season:{
        type:String,
        required:true
    },
    readings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Reading"
    }]
});

const AgriInfo= mongoose.model("AgriInfo",agriInfoSchema);
module.exports=AgriInfo;