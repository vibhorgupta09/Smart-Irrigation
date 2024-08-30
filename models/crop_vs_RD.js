const mongoose = require('mongoose');

const crop_vs_RDSchema= new mongoose.Schema({
    cropName:String,
    RD:{
        type:Number,
        comment: "Rooting depth of the crop" 
    }
});

const Crop_vs_RD= mongoose.model("Crop_vs_RD",crop_vs_RDSchema);

module.exports=Crop_vs_RD;