const { Schema } = require('mongoose');
const core = require('../core');

const userSchema = new core.Schema({
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

const vacancySchema = new core.Schema({});

const userModel = core.mongoose.model('users', userSchema);
const vacancyModel = core.mongoose.model('vacancy', vacancySchema);

module.exports.userModel = userModel;
module.exports.vacancyModel = vacancyModel;
