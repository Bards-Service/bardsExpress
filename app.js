import Express from 'express';
import db from './models/index.js';
import userRouter from './routes/user.js';

const app = Express();
const port = 3000;

// Выполнение подключения к базе данных
try {
  await db.authenticate();
  console.log('Поделючение к БД - успех!');
} catch (error) {
  console.error('Поделючение к БД - пропал. Описание: \n', error);
}

// Роуты
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Bards Express app listening on port ${port}`);
});
