const mongoose = require('mongoose');

const pressure_vs_depletionSchema= new mongoose.Schema({
    pressure:{
        type:Number,
        comment: "soil suction pressure in centi bar" 
    },
    clay:{
        type:Number,
        comment: "available water depletion percentage" 
    },
    loam:{
        type:Number,
        comment: "available water depletion percentage" 
    },
    sandyLoam:{
        type:Number,
        comment: "available water depletion percentage" 
    },
    fineSandyLoam:{
        type:Number,
        comment: "available water depletion percentage" 
    },
    loamySand:{
        type:Number,
        comment: "available water depletion percentage" 
    },
});

const Pressure_vs_depletion= mongoose.model("Pressure_vs_depletion",pressure_vs_depletionSchema);

module.exports=Pressure_vs_depletion;