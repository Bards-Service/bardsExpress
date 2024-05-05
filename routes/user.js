import express from 'express';
import User from '../models/user.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: [
      'id',
      'firstName',
      'secondName',
      'middleName',
      'birthday',
      'artistName',
      'email',
      'phone',
      'hashPassword',
      'vkLink',
    ],
  });
  res.send(`Метод полученимя всех пользователей не реализован! test: ${users}`);
});

userRouter.post('/', async (req, res) => {
  res.send('Метод создания нового пользователя не реализован!');
});

userRouter.get('/:id', async (req, res) => {
  res.send('Метод получения информации о конкретном пользователе не реализован!');
});

userRouter.put('/:id', async (req, res) => {
  res.send('Метод редактирования конкретного пользователя не реализован!');
});

userRouter.delete('/:id', async (req, res) => {
  // по факту на данный момент мы не будем удалять пользователя,
  // нужно в базе данных ставить ему флаг isDeleted : true
  res.send('Метод удаоения пользователя не реализован!');
});

export default userRouter;
