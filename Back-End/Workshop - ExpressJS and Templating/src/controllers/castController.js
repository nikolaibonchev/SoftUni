import express from 'express'
import castService from '../service/castService.js';

const castController = express.Router();

castController.get('/create', (req,res) => {
    res.render('cast/create');
});

castController.get('/attach', (req,res) => {
    res.render('cast/attach');
});

castController.post('/create', async (req,res) => {
    const castData = req.body;

    await castService.create(castData);

    res.redirect('/');
});

export default castController;