const core = require('./core');
require('./controllers/userController');
require('./controllers/vacancyController');

const port = process.env.PORT || 4002;

core.app.listen(port, () => {
  console.log('server started on port 4002');
});
