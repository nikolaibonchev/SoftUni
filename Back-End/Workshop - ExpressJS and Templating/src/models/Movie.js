import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
    description: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required'],
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
})

const Movie = model('Movie', movieSchema);
export default Movie;