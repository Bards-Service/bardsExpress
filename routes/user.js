import express from 'express';
import User from '../models/user.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).send(`Все пользователи: ${JSON.stringify(users, null, 2)}`);
  } catch (e) {
    res.status(503).send(`Ошибка базы данных: ${e}`);
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const thisUser = await User.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        birthday: req.body.birthday,
        artistName: req.body.artistName,
        email: req.body.email,
        phone: req.body.phone,
        hashPassword: req.body.hashPassword,
        vkLink: req.body.vkLink,
      },
    });
    res.status(201).send(`id: ${JSON.stringify(thisUser[0].id, null, 2)}`);
  } catch (e) {
    res.status(400).send(`Ошибка создания пользователя: ${e}`);
  }
});

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findAll({
    where: { id },
  });
  const userInfo = JSON.stringify(user, null, 2);
  if (userInfo.length - 2 !== 0) {
    res.status(200).send(`Пользователь ${id}: ${userInfo}`);
  } else {
    res.status(404).send('Пользователь не найден!');
  }
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
