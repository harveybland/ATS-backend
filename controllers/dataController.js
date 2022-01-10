const core = require('../core');
const schemas = require('../schemas/Schemas');

//Get countries
core.app.get('/api/countries', async function (req, resp) {
  try {
    const countries = await schemas.countryModel.find();
    resp.status(200).json(countries);
  } catch {
    resp.status('404').json('error');
  }
});

//Get titles
core.app.get('/api/titles', async function (req, resp) {
  try {
    const title = await schemas.titleSchema.find();
    resp.status(200).json(title);
  } catch {
    resp.status('404').json('error');
  }
});
