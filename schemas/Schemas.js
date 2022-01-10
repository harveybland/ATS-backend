const { Schema } = require('mongoose');
const core = require('../core');

const userSchema = new core.Schema({
  title: String,
  firstname: String,
  surname: String,
  address: String,
  city: String,
  postcode: String,
  county: String,
  country: String,
  mobile: String,
  email: String,
  DOB: String,
  age: String,
  isDeleted: { type: Boolean, default: false },
});

const vacancySchema = new core.Schema({
  jobTitle: String,
  salary: Number,
  salaryType: String,
  businessArea: String,
  employmentType: String,
  contractType: String,
  location: String,
});

const countrySchema = new core.Schema({
  name: String,
  code: String,
});

const titleSchema = new core.Schema({
  title: String,
});

const userModel = core.mongoose.model('users', userSchema);
const vacancyModel = core.mongoose.model('vacancy', vacancySchema);
const countryModel = core.mongoose.model('country', countrySchema);
const titleModel = core.mongoose.model('title', titleSchema);

module.exports.userModel = userModel;
module.exports.vacancyModel = vacancyModel;
module.exports.countryModel = countryModel;
module.exports.titleSchema = titleModel;
