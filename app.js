import Express from 'express';
import db from './models/index.js';
import userRouter from './routes/user.js';
import newsRouter from './routes/news.js';

const app = Express();
const port = 3000;

// Выполнение подключения к базе данных
try {
  await db.authenticate();
  console.log('Подключение к БД - успех!');
} catch (error) {
  console.error('Подключение к БД - пропало. Описание: \n', error);
}

app.use(Express.json());

// Роуты
app.use('/user', userRouter);
app.use('/news', newsRouter);

app.listen(port, () => {
  console.log(`Bards Express app listening on port ${port}`);
});
