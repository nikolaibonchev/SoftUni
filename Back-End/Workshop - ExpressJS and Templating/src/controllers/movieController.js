import express from 'express';
import movieService from '../service/movieService.js';
import castService from '../service/castService.js';
import {getCategoryOptionsViewData} from "../utils/movieUtils.js"

const movieController = express.Router();

movieController.get('/create', (req, res) =>{
    res.render('movie/create');
});

movieController.post('/create', async (req, res) =>{
    const userId = req.user.id
    const newMovie = req.body;
    await movieService.create(newMovie, userId);
    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) =>{
    const movieId = req.params.movieId;
    const userId = req.user?.id;
    const movie = await movieService.getOne(movieId);
    const isOwner = movie.owner?.equals(userId);
    res.render('movie/details', { movie, isOwner })
});

movieController.get('/search', async (req, res) =>{
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    res.render('search', { movies, filter })
});

movieController.get('/:movieId/attach', async (req, res) =>{
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    console.log(movie);
    
    const casts = await castService.getAll({exclude: movie.casts});
    res.render('movie/attach', { movie, casts })
});

movieController.post('/:movieId/attach', async (req, res) =>{
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    await movieService.attach(movieId, castId);
    res.redirect(`/movies/${movieId}/details`);
});

movieController.get('/:movieId/delete', async (req, res) =>{
    const movieId = req.params.movieId;
   
    await movieService.delete(movieId);
    res.redirect('/')
});

movieController.get('/:movieId/edit', async (req, res) =>{
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const userId = req.user?.id;
    const isOwner = movie.owner?.equals(userId);

    if(!isOwner){
        return res.status(403).end();
    }

    const categoryOptionsViewData = getCategoryOptionsViewData(movie.category);

    res.render('movie/edit', { movie, categoryOptions: categoryOptionsViewData });
});

movieController.post('/:movieId/edit', async (req, res) =>{
    const movieId = req.params.movieId;
    const movieData = req.body;
    const userId = req.user?.id;

    await movieService.update(movieId, movieData)

    res.redirect(`/movies/${movieId}/details`);
});

export default movieController;