const mongoose = require('mongoose');

const Crop_vs_RD=require('../models/crop_vs_RD.js');
const initDataCrop_vs_RD = require("./crop_vs_RDData.js");

const Location_vs_PET=require('../models/location_vs_PET.js');
const initDataLocation_vs_PET = require("./location_vs_PETData.js");

const Pressure_vs_depletion=require('../models/pressure_vs_depletion.js');
const initDataPressure_vs_depletion = require("./pressure_vs_depletionData.js");

const Soil=require('../models/soil.js');
const initDataSoil = require("./soilData.js");


main()
.then(()=>{
    console.log("successful connection to DB");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/irrigationManagement');
};

const initDB = async () => {
    await Crop_vs_RD.deleteMany({});
    await Crop_vs_RD.insertMany(initDataCrop_vs_RD.data);
    console.log("Crop_vs_RD data was initialized");

    await Location_vs_PET.deleteMany({});
    await Location_vs_PET.insertMany(initDataLocation_vs_PET.data);
    console.log("Location_vs_PET data was initialized");

    await Pressure_vs_depletion.deleteMany({});
    await Pressure_vs_depletion.insertMany(initDataPressure_vs_depletion.data);
    console.log("Pressure_vs_depletion data was initialized");

    await Soil.deleteMany({});
    await Soil.insertMany(initDataSoil.data);
    console.log("Soildata was initialized");
  };
  
initDB();