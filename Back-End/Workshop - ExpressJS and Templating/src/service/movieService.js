const movies = [
  {
    id: "tt1630029",
    title: "Avatar: The Way of Water",
    genre: "Adventure",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. But trouble returns as the RDA invades again.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "James Cameron",
    year: 2022,
    rating: 7.6,
    category: "movie"
  },
  {
    id: "tt1745960",
    title: "Top Gun: Maverick",
    genre: "Action",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Joseph Kosinski",
    year: 2022,
    rating: 8.2,
    category: "movie"
  },
  {
    id: "tt15398776",
    title: "Oppenheimer",
    genre: "Biography",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Christopher Nolan",
    year: 2023,
    rating: 8.4,
    category: "movie"
  }
];

export default {
    getAll() {return movies},
    create(movieData) {
      movies.push(movieData)
      return movieData;
    },
    getOne(movieId){
      const movie = movies.find(movie => movie.id === movieId);
      return movie;
    }
}