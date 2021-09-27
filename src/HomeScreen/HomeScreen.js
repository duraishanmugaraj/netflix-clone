import React from 'react';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from '../request';
import './HomeScreen.css'

function HomeScreen(props) {
	return (
		<div className="home-screen">
			<Nav />
			<Banner />
			<Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
			{/* <Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Si-Fi Movies" fetchURL={requests.fetchSiFiMovies} />
			<Row title="Fantasy Movies" fetchURL={requests.fetchFantasyMovies} />
			<Row title="Animation Movies" fetchURL={requests.fetchAnimationMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchHistoryMovies} /> */}
		</div>
	);
}

export default HomeScreen;