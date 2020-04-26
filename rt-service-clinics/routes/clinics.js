const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var recentDays = 5;

var schema = {
  "type": "array",
  "minItems": 10,
  "maxItems": 20,
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "faker": "company.companyName"
      },
      "price": {
        "type": "integer",
        "minimum": 100,
        "maximum": 300
      },
      "phoneNumber": {
        "type": "string",
        "faker": "phone.phoneNumber"
      },
      "location": {
        "type": "string",
        "faker": "address.streetAddress"
      }
    },
    "required": [
      "name",
      "price",
      "phoneNumber",
      "location"
    ]
  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('clinics', 
	  	{  clinics:  sample });
  });

  
});

module.exports = router;
