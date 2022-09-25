const { app } = require('./app');
//util
const { sequelize } = require('./utils/database');
const { initModels } = require('./utils/initModels');

sequelize
  .authenticate()
  .then(() => console.log('Database Postgress authenticate'))
  .catch((error) => console.log(error));

// Models relations
initModels();

sequelize
  .sync()
  .then(() => console.log('Database syncronized'))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
