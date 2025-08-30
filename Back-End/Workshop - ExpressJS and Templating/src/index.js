import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import { auth } from './middlewares/authMiddleware.js';
import routes from './routes.js';

const app = express();

app.use(express.static('./src/public'));

app.use(cookieParser());

app.use(auth);

app.use(express.urlencoded());

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating(rating){
            return '★'.repeat(Math.floor(rating))
        }
    },
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    },
}))

try {
    await mongoose.connect(`mongodb://localhost:27017`, { dbName: 'moviesdb'});
    console.log('Successfully connect to DB!');
    
} catch (error) {
    console.log('Cannot connect to DB!');
    console.log(error.message);
}

app.set('view engine', 'hbs');

app.set('views', './src/views');

app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));