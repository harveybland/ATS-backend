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

const accountSchema = new core.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = core.mongoose.model('users', userSchema);
const vacancyModel = core.mongoose.model('vacancy', vacancySchema);
const accountModel = core.mongoose.model('account', accountSchema);

module.exports.userModel = userModel;
module.exports.vacancyModel = vacancyModel;
module.exports.accountModel = accountModel;
