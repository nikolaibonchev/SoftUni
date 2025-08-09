import express from 'express';
import movieService from '../service/movieService.js';

const movieController = express.Router();

movieController.get('/create', (req, res) =>{
    res.render('create');
})

movieController.post('/create', async (req, res) =>{
    const newMovie = req.body;
    await movieService.create(newMovie);
    res.redirect('/');
})

movieController.get('/:movieId/details', (req, res) =>{
    const movieId = req.params.movieId;
    const movie = movieService.getOne(movieId);
    res.render('details', { movie })
})

movieController.get('/search', async (req, res) =>{
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    res.render('search', { movies })
})

export default movieController;