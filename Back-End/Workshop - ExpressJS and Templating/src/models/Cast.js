import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Actor\'s name is required'],
    },
    age: {
        type: String,
        required: [true, 'Actor\'s age is required'],
        min: 1,
        max: 120,
    },
    born: {
        type: String,
        required: [true, 'Actor\'s birthdate is required'],
    },
    castImg: {
        type: String,
        required: [true, 'Actor\'s picture is required'],
        validate: [/^https?:\/\//, 'Invalid img url'],
    }
});

const Cast = model('Cast', castSchema);
export default Cast;