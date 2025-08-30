import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        lowercase: true,
    },
    description: {
        type: String,
        required: false,
        max: [1000, "Description should not have more than 1000 characters"],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required'],
        validate: /^https?:\/\//,
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
        min: 0,
        max: 10
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Movie = model('Movie', movieSchema);
export default Movie;