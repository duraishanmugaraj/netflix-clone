import { API } from "./firebaseconfig";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
	fetchTamilMovies: `/discover/movie?api_key=${API}&with_original_language=ta&sort_by=primary_release_date.desc&primary_release_date.gte=2019-11-25`,
	fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
	fetchAnimationMovies: `/discover/movie?api_key=${API}&with_genres=16`,
	fetchFantasyMovies: `/discover/movie?api_key=${API}&with_genres=14`,
	fetchSiFiMovies: `/discover/movie?api_key=${API}&with_genres=878`,
};

export const req_banner = {
	"backdrop_path": "/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
	"first_air_date": "2017-05-02",
	"genre_ids": [
		80,
		18
	],
	"id": 71446,
	"name": "Money Heist",
	"origin_country": [
		"ES"
	],
	"original_language": "es",
	"original_name": "La Casa de Papel",
	"overview": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
	"popularity": 1330.859,
	"poster_path": "/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
	"vote_average": 8.3,
	"vote_count": 14537
}

export default requests