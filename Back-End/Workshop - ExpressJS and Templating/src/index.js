import express from 'express'
import handlebars from 'express-handlebars'
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import mongoose from "mongoose";
import castController from './controllers/castController.js';

const app = express();

app.use(express.static('./src/public'));

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

app.use(homeController);
app.use('/movies', movieController);
app.use('/casts', castController);
app.all('*url', (req, res) =>{
    res.render('404');
})

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));