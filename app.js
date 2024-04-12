import Express from 'express';

const app = Express();

const port = 3000;
app.listen(port, () => {
    'Server has been started http://localhost:3000'
})
