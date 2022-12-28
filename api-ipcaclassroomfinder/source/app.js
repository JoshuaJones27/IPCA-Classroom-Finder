const app = require('express')();
const consign = require('consign');
const cors = require('cors');
const mysql = require('mysql');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'ipcaclassroomfinder.mysql.database.azure.com', 
    port: 3306, 
    database: 'ipcaclassroomfinder', 
    user: 'IPCAClassroomFinder', 
    password: 'sidyfgygIJS956_kjhvfddv87' 
  }
});
  
app.db = knex;
app.use(cors());

consign({ cwd: 'source', verbose: false })
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/router.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send('IPCAClassroomFinder');
});

app.use((err, req, res, next) => {
  const { name, message, stack } = err;
  if (name === 'validationError') res.status(400).json({ error: message });
  else if (name === 'forbiddenError') res.status(403).json({ error: message });
  else {
    console.log(message);
    res.status(500).json({ name, message, stack });
  }
  next(err);
});

module.exports = app;
