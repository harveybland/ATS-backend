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
core.app.post('/api/vacancies', async function (req, resp) {
  const result = await schemas.vacancyModel.create(req.body);
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

//Update a vacancy
core.app.put('/api/vacancy/:uid', async (req, resp) => {
  try {
    const id = req.params.uid;
    let vacancy = await schemas.vacancyModel.findOne({ _id: id });
    (user.jobTitle = req.body.jobTitle),
      (user.salary = req.body.salary),
      (user.salaryType = req.body.salaryType),
      (user.businessArea = req.body.businessArea),
      (user.employmentType = req.body.employmentType),
      (user.contractType = req.body.contractType),
      (user.location = req.body.location);
    vacancy.save();
    resp.status(200).json(vacancy);
  } catch {
    resp.status('404').json('error');
  }
});

// Delete client
core.app.delete('/api/vacancy/:uid', async function (req, resp) {
  try {
    const id = req.params.uid;
    let vacancy = await schemas.vacancyModel.deleteOne({ _id: id });
    resp.status(200).json(vacancy);
  } catch {
    resp.status('404').json('error');
  }
});

// Search vacancy
core.app.get('/api/searchVacancy', async (req, resp) => {
  try {
    const contractType = req.query.contractType;
    const employmentType = req.query.employmentType;
    const businessArea = req.query.businessArea;
    const salary = req.query.salary;
    const salaryType = req.query.salaryType;
    const jobTitle = req.query.jobTitle;

    let data = await schemas.vacancyModel.find({
      $or: [
        {
          contractType: contractType,
        },
        {
          employmentType: employmentType,
        },
        {
          businessArea: businessArea,
        },
        {
          salary: salary,
        },
        {
          salaryType: salaryType,
        },
        {
          jobTitle: jobTitle,
        },
      ],
    });
    if (data.length) {
      resp.status(200).json(data);
    }
    if (!data.length) {
      const users = await schemas.vacancyModel.find();
      resp.status(200).json(users);
    }
  } catch {
    resp.status('404').json('error');
  }
});
