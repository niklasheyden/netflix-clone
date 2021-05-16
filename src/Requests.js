// Typically we would store in {process.env API_KEY}
const API_KEY = "4df4623ce7adaf0a5ef4ce7f728453d5";

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=99`,
}

export default requests;
