const core = require('./core');
require('./controllers/userController');
require('./controllers/vacancyController');
require('./controllers/dataController');
require('./controllers/accountControler');

const port = process.env.PORT || 4002;

core.app.listen(port, () => {
  console.log('server started on port 4002');
});
