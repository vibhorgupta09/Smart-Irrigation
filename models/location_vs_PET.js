const mongoose = require('mongoose');

const location_vs_PETSchema= new mongoose.Schema({
    location:String,
    maxPET:{
        type:Number,
        comment: "maximum potential evapotranspiration per annum" 
    },
    minPET:{
        type:Number,
        comment: "minimum potential evapotranspiration per annum" 
    }
});

const Location_vs_PET= mongoose.model("Location_vs_PET",location_vs_PETSchema);

module.exports=Location_vs_PET;