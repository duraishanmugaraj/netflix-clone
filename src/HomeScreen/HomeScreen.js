import React, { useState } from 'react';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests, { req_banner } from '../request';
import './HomeScreen.css'

function HomeScreen() {
	const [movie, setMovie] = useState(req_banner)

	const onClickHandler = (mov) => {
		setMovie(mov)
		const section = document.querySelector("#app");
		section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		console.log(mov)
	}
	return (
		<div className="home-screen">
			<Nav />
			<Banner movie={movie} />
			<Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} handleOnClick={onClickHandler} />
			<Row title="Tamil Movies" fetchURL={requests.fetchTamilMovies} handleOnClick={onClickHandler} />
			<Row title="Trending Now" fetchURL={requests.fetchTrending} handleOnClick={onClickHandler} />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} handleOnClick={onClickHandler} />
			<Row title="Si-Fi Movies" fetchURL={requests.fetchSiFiMovies} handleOnClick={onClickHandler} />
			<Row title="Fantasy Movies" fetchURL={requests.fetchFantasyMovies} handleOnClick={onClickHandler} />
			<Row title="Animation Movies" fetchURL={requests.fetchAnimationMovies} handleOnClick={onClickHandler} />
		</div>
	);
}

export default HomeScreen;