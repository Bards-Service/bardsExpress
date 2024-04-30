import Express from "express";
import Sequelize from "sequelize";
const app = Express();
const port = 3000;

// TO DO: заменить на переменные окружения и удалить ненужные комментарии
const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: 'db', // Имя контенера с БД
    dialect: 'postgres',
  }
);


await sequelize
  .sync()
  .then(result => {
    console.log('DB connected!');
    app.listen(port, () => {
      console.log(`Bards Express app listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});
