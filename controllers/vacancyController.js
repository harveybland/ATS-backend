const core = require('../core');
const schemas = require('../schemas/Schemas');

// Get all vacancies
core.app.get('/api/vacancies', async function (req, resp) {
  try {
    const vacancies = await schemas.vacancyModel.find();
    resp.status(200).json(vacancies);
  } catch {
    resp.status('404').json('error');
  }
});
