import express from 'express';


const userRouter = express.Router();

userRouter.get('/:id', (req, res) => {
    res.send('Welcome to user root!');
});

userRouter.get('/qr', (req, res) => {
    res.send('QR!');
});

export default userRouter;
