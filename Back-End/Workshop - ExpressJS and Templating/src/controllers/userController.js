import { Router } from 'express'
import userService from '../service/userService.js';

const userController = Router();

userController.get('/login',(req,res) => {
    res.render('user/login');
});

userController.get('/register',(req,res) => {
    res.render('user/register');
});

userController.post('/register', async(req,res) => {
    const userData = req.body;

    await userService.register(userData);

    res.redirect('/users/login');
});

export default userController;