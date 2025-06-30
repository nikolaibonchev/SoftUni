function movies(arr){

    let movies = [];

    for (const command of arr){
        
        if(command.includes('addMovie')){
            let token = command.split('addMovie ');
            let movieName = token[1];

            movies.push({ name: movieName});

        } else if (command.includes('directedBy')){
            const [movieName, moviedirector] = command.split(' directedBy ');
            let checkList = movies.find(movObj => movObj.name === movieName);

            if (checkList){
                checkList.director = moviedirector;
            }

        } else if (command.includes('onDate')){
            const [movieName, movieRelease] = command.split(' onDate ');
            let checkList = movies.find(movObj => movObj.name === movieName);

            if (checkList){
                checkList.date = movieRelease;
            }
        }
    }

    for (const film of movies){
        if (film.name && film.director && film.date){
            console.log(JSON.stringify(film));
        }
    }

}

movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis FordCoppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']);