// Typically we would store in {process.env API_KEY}
const API_KEY = "4df4623ce7adaf0a5ef4ce7f728453d5";

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/week?api_key${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key${API_KEY}&withgenres=28`,
  fetchComedyMovies: `/discover/movie?api_key${API_KEY}&withgenres=35`,
  fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&withgenres=27`,
  fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&withgenres=10749`,
  fetchDocumentaries: `/discover/movie?api_key${API_KEY}&withgenres=99`,
}

export default requests;

