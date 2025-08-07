import express from 'express';
import movieService from '../service/movieService.js';

const movieController = express.Router();

movieController.get('/create', (req, res) =>{
    res.render('create');
})

movieController.post('/create', (req, res) =>{
    const newMovie = req.body;
    movieService.create(newMovie);
    res.redirect('/');
})

movieController.get('/:movieId/details', (req, res) =>{
    const movieId = req.params.movieId;
    const movie = movieService.getOne(movieId);
    res.render('details', { movie })
})

export default movieController;