import { API } from "./firebase";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
	fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
	fetchHistoryMovies: `/discover/movie?api_key=${API}&with_genres=36`,
	fetchAnimationMovies: `/discover/movie?api_key=${API}&with_genres=16`,
	fetchFantasyMovies: `/discover/movie?api_key=${API}&with_genres=14`,
	fetchSiFiMovies: `/discover/movie?api_key=${API}&with_genres=878`,
};

export default requests