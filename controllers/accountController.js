const core = require('../core');
const schemas = require('../schemas/Schemas');

// create account
core.app.post('/api/createAccount', async function (req, resp) {
  schemas.accountModel
    .create(req.body)
    .then((result) => {
      console.log(result);
      resp.status(200).json('Account Created');
    })
    .catch((error) => {
      resp.status('401').json(error);
    });
});

// login
core.app.post('/api/login', async function (req, resp) {
  const username = req.body.username;
  try {
    const user = await schemas.accountModel.findOne({ username: username });
    const isValid = await user.comparePassword(req.body.password);
    resp.status(200).json('Success');
  } catch (e) {
    resp.status(401).json(e);
  }
});

// Forgot password
