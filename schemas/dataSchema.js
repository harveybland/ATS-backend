const { Schema } = require('mongoose');
const core = require('../core');

const locationSchema = new core.Schema({
  name: String,
  code: String,
});

const titleSchema = new core.Schema({
  value: String,
});

const businessAreaSchema = new core.Schema({
  value: String,
});

const salaryTypeSchema = new core.Schema({
  value: String,
});

const contractTypeSchema = new core.Schema({
  value: String,
});

const employmentTypeSchema = new core.Schema({
  value: String,
});

const locationModel = core.mongoose.model('locations', locationSchema);
const titleModel = core.mongoose.model('title', titleSchema);
const businessAreaModel = core.mongoose.model(
  'businessArea',
  businessAreaSchema
);
const salaryTypeModel = core.mongoose.model('salaryType', salaryTypeSchema);
const contractTypeModel = core.mongoose.model(
  'contractType',
  contractTypeSchema
);
const employmentTypeModel = core.mongoose.model(
  'employmentType',
  employmentTypeSchema
);

module.exports.locationModel = locationModel;
module.exports.titleSchema = titleModel;
module.exports.businessAreaSchema = businessAreaModel;
module.exports.salaryTypeSchema = salaryTypeModel;
module.exports.contractTypeSchema = contractTypeModel;
module.exports.employmentTypeSchema = employmentTypeModel;
