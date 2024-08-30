const Pressure_vs_depletion=require('../models/pressure_vs_depletion.js');
const Crop_vs_RD=require('../models/crop_vs_RD.js');
const Soil=require('../models/soil.js');

async function volumeCal(readingVal,agriInfo) {
    
    let soil=agriInfo.soil;
    let area=agriInfo.area;
    let pressure=readingVal;

    let dataRes= await Pressure_vs_depletion.find({ pressure: pressure});
    let AWDP= dataRes[0][soil];

    let crop=agriInfo.cropName;
    let dataRes2= await Crop_vs_RD.find({ cropName:crop});
    console.log(dataRes2);
    let RD= dataRes2[0].RD;

    let dataRes3= await Soil.find({ soilName:soil});
    let AWSC= dataRes3[0].AWSC;
    
    let volume=area*AWDP*AWSC*RD;
    return volume;
}

module.exports= volumeCal;