import express from 'express'

const castController = express.Router();

castController.get('/create', (req,res) => {
    res.render('cast/create');
});

castController.get('/attach', (req,res) => {
    res.render('cast/attach');
});

export default castController;