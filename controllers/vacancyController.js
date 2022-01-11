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

// Create vacancy
core.app.post('/api/vacancy', async function (req, resp) {
  const result = schemas.vacancyModel.create(req.body);
  try {
    resp.status(200).json(result);
  } catch {
    resp.status('404').json('error');
  }
});

// Get single vacancy
core.app.get('/api/vacancy/:uid', async function (req, resp) {
  try {
    const vacancy = await schemas.vacancyModel.aggregate([
      {
        $match: {
          _id: core.mongoose.Types.ObjectId(req.params.uid),
        },
      },
    ]);
    resp.status(200).json(vacancy[0]);
  } catch {
    resp.status('404').json('error');
  }
});
