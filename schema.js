const Joi = require('joi');

module.exports.crop_vs_RDSchema = Joi.object({
    crop_vs_RD: Joi.object({
        cropName: Joi.string().required(),
        RD: Joi.number().required().messages({
            'number.base': 'Rooting depth (RD) must be a number',
            'any.required': 'Rooting depth (RD) is required'
        })
    }).required(),
});

module.exports.location_vs_PETSchema = Joi.object({
    location_vs_PET: Joi.object({
        location: Joi.string().required(),
        PET: Joi.number().required().messages({
            'number.base': 'Potential evapotranspiration (PET) must be a number',
            'any.required': 'Potential evapotranspiration (PET) is required'
        })
    }).required(),
});

module.exports.pressure_vs_depletionSchema = Joi.object({
    pressure_vs_depletion: Joi.object({
        pressure: Joi.number().required().messages({
            'number.base': 'Soil suction pressure (pressure) must be a number',
            'any.required': 'Soil suction pressure (pressure) is required'
        }),
        clay: Joi.number().required().messages({
            'number.base': 'Available water depletion percentage for clay (clay) must be a number',
            'any.required': 'Available water depletion percentage for clay (clay) is required'
        }),
        loam: Joi.number().required().messages({
            'number.base': 'Available water depletion percentage for loam (loam) must be a number',
            'any.required': 'Available water depletion percentage for loam (loam) is required'
        }),
        sandyLoam: Joi.number().required().messages({
            'number.base': 'Available water depletion percentage for sandy loam (sandyLoam) must be a number',
            'any.required': 'Available water depletion percentage for sandy loam (sandyLoam) is required'
        }),
        fineSandyLoam: Joi.number().required().messages({
            'number.base': 'Available water depletion percentage for fine sandy loam (fineSandyLoam) must be a number',
            'any.required': 'Available water depletion percentage for fine sandy loam (fineSandyLoam) is required'
        }),
        loamySand: Joi.number().required().messages({
            'number.base': 'Available water depletion percentage for loamy sand (loamySand) must be a number',
            'any.required': 'Available water depletion percentage for loamy sand (loamySand) is required'
        })
    }).required(),
});

module.exports.soilSchema = Joi.object({
    soil: Joi.object({   
        soilName: Joi.string().required().messages({
            'string.base': 'Soil name (soilName) must be a string',
            'any.required': 'Soil name (soilName) is required'
        }),
        AWSC: Joi.number().required().messages({
            'number.base': 'Available water storage capacity (AWSC) must be a number',
            'any.required': 'Available water storage capacity (AWSC) is required'
        }),
        MSIR: Joi.number().required().messages({
            'number.base': 'Maximum Soil Infiltration Rate (MSIR) must be a number',
            'any.required': 'Maximum Soil Infiltration Rate (MSIR) is required'
        })
    }).required(),
});

module.exports.agriInfoSchema = Joi.object({
    agriInfo: Joi.object({ 
        cropName: Joi.string().required().messages({
            'string.base': 'Crop name (cropName) must be a string',
            'any.required': 'Crop name (cropName) is required'
        }),
        soil: Joi.string().required().messages({
            'string.base': 'Soil type (soil) must be a string',
            'any.required': 'Soil type (soil) is required'
        }),
        location: Joi.string().required().messages({
            'string.base': 'Location must be a string',
            'any.required': 'Location is required'
        }),
        irrigationSystem: Joi.string().required().messages({
            'string.base': 'Irrigation system (irrigationSystem) must be a string',
            'any.required': 'Irrigation system (irrigationSystem) is required'
        }),
        area: Joi.number().required().messages({
            'number.base': 'Area must be a number',
            'any.required': 'Area is required'
        }),
        season: Joi.string().required().messages({
            'string.base': 'Season must be a string',
            'any.required': 'Season is required'
        }),
    }).required(),
});

module.exports.readingSchema = Joi.object({
    reading: Joi.object({ 
        readingVal: Joi.number().required().messages({
            'number.base': 'Reading value (readingVal) must be a number',
            'any.required': 'Reading value (readingVal) is required'
        }),
        output: Joi.string().optional().allow(null, '').messages({
            'string.base': 'Output must be a string'
        }),
        date: Joi.date().default(() => new Date(), 'current date').messages({
            'date.base': 'Date must be a valid date'
        }),
        feedback: Joi.string().optional().allow(null, '').messages({
            'string.base': 'Feedback must be a string'
        })
    }).required(),    
});




