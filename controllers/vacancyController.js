const core = require('../core');
const schemas = require('../schemas/Schemas');

// Get all vacancies
core.app.get('/api/vacancies', async (req, resp) => {
  try {
    const vacancies = await schemas.vacancyModel.find();
    resp.status(200).json(vacancies);
  } catch {
    resp.status('404').json('error');
  }
});

// Create vacancy
core.app.post('/api/vacancies', async (req, resp) => {
  try {
    await schemas.vacancyModel.create(req.body);
    const vacancies = await schemas.vacancyModel.find();
    resp.status(200).json(vacancies);
  } catch {
    resp.status('404').json('error');
  }
});

// Get single vacancy
core.app.get('/api/vacancy/:uid', async (req, resp) => {
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
    (vacancy.jobTitle = req.body.jobTitle),
      (vacancy.salary = req.body.salary),
      (vacancy.salaryType = req.body.salaryType),
      (vacancy.businessArea = req.body.businessArea),
      (vacancy.employmentType = req.body.employmentType),
      (vacancy.contractType = req.body.contractType),
      (vacancy.location = req.body.location);
    vacancy.save();
    const vacancies = await schemas.vacancyModel.find();
    resp.status(200).json(vacancies);
  } catch {
    resp.status('404').json('error');
  }
});

// Delete client
core.app.delete('/api/vacancy/:uid', async (req, resp) => {
  try {
    const id = req.params.uid;
    await schemas.vacancyModel.deleteOne({ _id: id });
    const vacancies = await schemas.vacancyModel.find();
    resp.status(200).json(vacancies);
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
      const vacancies = await schemas.vacancyModel.find();
      resp.status(200).json(vacancies);
    }
  } catch {
    resp.status('404').json('error');
  }
});
