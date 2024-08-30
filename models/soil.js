const mongoose = require('mongoose');

const soilSchema= new mongoose.Schema({
    soilName:String,
    AWSC:{
        type:Number,
        comment: "available water storage capacity of the soil in mm/m " 
    },
    MSIR:{
        type:Number,
        comment: "Maximum Soil Infiltration Rate of the cultivated soil in mm/hr " 
    }
});

const Soil= mongoose.model("Soil",soilSchema);

module.exports=Soil;