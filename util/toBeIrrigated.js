const Pressure_vs_depletion=require('../models/pressure_vs_depletion.js');

async function toBeIrrigated(readingVal,agriInfo) {
    
    let soil=agriInfo.soil;
    let irrigationSystem=agriInfo.irrigationSystem;
    let pressure=readingVal;

    let dataRes= await Pressure_vs_depletion.find({ pressure: pressure});
    let AWDP= dataRes[0][soil];

    if (irrigationSystem=="Sprinkler") {
        if (AWDP>=50) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    } else {
        if (AWDP>=25) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
}

module.exports= toBeIrrigated;