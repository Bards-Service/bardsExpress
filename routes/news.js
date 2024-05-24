import express from 'express';
import News from '../models/news.js';

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
  try {
    const news = await News.findAll({});
    res.status(200).send(`Все новости: ${JSON.stringify(news, null, 2)}`);
  } catch (e) {
    res.status(503).send(`Ошибка базы данных: ${e}`);
  }
});

newsRouter.post('/', async (req, res) => {
  try {
    const thisNews = await News.findOrCreate({
      where: {
        header: req.body.header,
      },
      defaults: {
        userId: req.body.userId,
        title: req.body.title,
        imageSrc: req.body.imageSrc,
        text: req.body.text,
      },
    });
    res.status(201).send(`id: ${JSON.stringify(thisNews[0].id, null, 2)}`);
  } catch (e) {
    res.status(400).send(`Ошибка создания новости: ${e}`);
  }
});

newsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const news = await News.findAll({
    where: { id },
  });
  const newsInfo = JSON.stringify(news, null, 2);
  if (newsInfo.length - 2 !== 0) {
    res.status(200).send(`Новость ${id}: ${newsInfo}`);
  } else {
    res.status(404).send('Новость не найдена!');
  }
});

newsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const news = await News.findOne({ where: { id } });
    news.update(obj);
    res.status(200).send(`Новость ${id} обновлена`);
  } catch (error) {
    res.status(400).send(`Ошибка: ${error}`);
  }
});

newsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updatedRowsCount] = await News.update(
      { isDeleted: true },
      { where: { id } },
    );

    if (updatedRowsCount === 0) {
      res.status(404).send('Новость не найдена!');
      return;
    }

    res.send('Новость успешно удалена!');
  } catch (error) {
    console.error('Ошибка при удалении новости:', error);
    res.status(500).send('Произошла ошибка при удалении новости.');
  }
});

export default newsRouter;
