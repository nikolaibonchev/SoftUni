import { Router } from 'express'
import userService from '../service/userService.js';

const userController = Router();

userController.get('/login',(req,res) => {
    res.render('user/login');
});

userController.post('/login', async(req,res) => {
    const { email, password } = req.body;

    const token = await userService.login(email, password);
    
    res.cookie('auth', token);
    res.redirect('/');
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