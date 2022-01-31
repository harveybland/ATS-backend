const core = require('../core');
const schemas = require('../schemas/Schemas');

// async function data() {
//   const users = await schemas.userModel.find();
//   return users;
// }

// Create User
core.app.post('/api/users', async function (req, resp) {
  try {
    const result = await schemas.userModel.create(req.body);

    const users = await schemas.userModel.find();
    resp.status(200).json(users);
  } catch {
    resp.status('404').json('error');
  }
});

//Get all users
core.app.get('/api/users', async function (req, resp) {
  try {
    const users = await schemas.userModel.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: 'vacancyid',
          as: 'vacancy',
        },
      },
    ]);
    resp.status(200).json(users);
  } catch {
    resp.status('404').json('error');
  }
});

// get user
core.app.get('/api/user/:uid', async function (req, resp) {
  try {
    const user = await schemas.userModel.aggregate([
      {
        $match: {
          _id: core.mongoose.Types.ObjectId(req.params.uid),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: 'vacancyid',
          as: 'vacancy',
        },
      },
    ]);
    resp.status(200).json(user[0]);
  } catch {
    resp.status('404').json('error');
  }
});

//Update a user
core.app.put('/api/user/:uid', async (req, resp) => {
  try {
    const id = req.params.uid;
    let user = await schemas.userModel.findOne({ _id: id });
    (user.title = req.body.title),
      (user.firstname = req.body.firstname),
      (user.surname = req.body.surname),
      (user.address = req.body.address),
      (user.city = req.body.city),
      (user.postcode = req.body.postcode),
      (user.county = req.body.county),
      (user.mobile = req.body.mobile),
      (user.email = req.body.email),
      (user.DOB = req.body.DOB),
      user.save();

    const users = await schemas.userModel.find();
    resp.status(200).json(users);
  } catch {
    resp.status('404').json('error');
  }
});

// Delete user
core.app.delete('/api/user/:uid', async (req, resp) => {
  try {
    const id = req.params.uid;
    await schemas.userModel.deleteOne({ _id: id });

    const users = await schemas.userModel.find();
    resp.status(200).json(users);
  } catch {
    resp.status('404').json('error');
  }
});
