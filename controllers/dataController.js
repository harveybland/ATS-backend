const core = require('../core');
const schemas = require('../schemas/dataSchema');

//Get countries
core.app.get('/api/location', async (req, resp) => {
  try {
    const location = await schemas.locationModel.find();
    resp.status(200).json(location);
  } catch {
    resp.status('404').json('error');
  }
});

//Get titles
core.app.get('/api/titles', async (req, resp) => {
  try {
    const title = await schemas.titleSchema.find();
    resp.status(200).json(title);
  } catch {
    resp.status('404').json('error');
  }
});

// Get business area
core.app.get('/api/businessArea', async (req, resp) => {
  try {
    const businessArea = await schemas.businessAreaSchema.find();
    resp.status(200).json(businessArea);
  } catch {
    resp.status('404').json('error');
  }
});

// Get salary type
core.app.get('/api/salaryType', async (req, resp) => {
  try {
    const salaryType = await schemas.salaryTypeSchema.find();
    resp.status(200).json(salaryType);
  } catch {
    resp.status('404').json('error');
  }
});

// Get contract type
core.app.get('/api/contractType', async (req, resp) => {
  try {
    const contractType = await schemas.contractTypeSchema.find();
    resp.status(200).json(contractType);
  } catch {
    resp.status('404').json('error');
  }
});

// Get employment type
core.app.get('/api/employmentType', async (req, resp) => {
  try {
    const employmentType = await schemas.employmentTypeSchema.find();
    resp.status(200).json(employmentType);
  } catch {
    resp.status('404').json('error');
  }
});
