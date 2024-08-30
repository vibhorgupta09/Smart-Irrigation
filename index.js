const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const AgriInfo=require('./models/agriInfo.js');
const Reading=require('./models/reading.js');
const volumeCal=require('./util/volumeCal.js');
const toBeIrrigated=require('./util/toBeIrrigated.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));

main()
.then(()=>{
    console.log("successful connection to DB");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/irrigationManagement');
};

app.get('/', (req, res) => {
    res.send('y')
});


//home
app.get('/agriInfo', async (req, res) => {
    let agriInfos= await AgriInfo.find();
    res.render("agriInfo.ejs",{agriInfos});
});


//create
app.get('/agriInfo/new', (req, res) => {
    res.render("newAgri.ejs");
});

app.post("/agriInfo",(req,res)=>{
    let {cropName,soil,location,irrigationSystem,area,season}=req.body;
    let newAgriInfo= new AgriInfo({
        cropName:cropName,
        soil:soil,
        location:location,
        irrigationSystem:irrigationSystem,
        area:area,
        season:season
    });
    newAgriInfo.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/agriInfo");
});

//delete
app.delete('/agriInfo/:id', async (req, res) => {
    let {id}= req.params;
    let deletedAgriInfo=await AgriInfo.findByIdAndDelete(id);
    console.log(deletedAgriInfo);
    res.redirect("/agriInfo");
});

//show
app.get('/agriInfo/:id', async (req, res) => {
    let {id}= req.params;
    let agriInfo=await AgriInfo.findById(id).populate("readings");
    res.render("showAgri.ejs",{agriInfo});
});


//READINGS
app.post("/agriInfo/:id/readings",async (req,res)=>{
    let agriInfo= await AgriInfo.findById(req.params.id).populate("readings");
    // let reading
    let {readingVal,date}=req.body;

    let toBeIrri= toBeIrrigated(readingVal,agriInfo);
    let output="no";
    let feedback= `not to be irrigated`;
  
    if (toBeIrri==true) {
        let output="yes";
        let volume= volumeCal(readingVal,agriInfo);
        let feedback= `it has to be irrigated with volume ${volume}`;
    }

    let newReading= new Reading({
        readingVal:readingVal,
        date:date,
        output:output,
        feedback:feedback
    });
    agriInfo.readings.push(newReading);
    await newReading.save();
    await agriInfo.save();
    res.redirect(`/agriInfo/${agriInfo._id}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });