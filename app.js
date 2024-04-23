import Express from "express";
import Sequelize from "sequelize";
const app = Express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  const sequelize = new Sequelize('postgres://admin:password@0.0.0.0:5432/');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
