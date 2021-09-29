import React, { useState } from 'react';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests, { req_banner, movieSearch, recomendations } from '../request';
import './HomeScreen.css'
import MyList from './MyList';

function HomeScreen() {
	const [movie, setMovie] = useState(req_banner)
	const [search, setSearch] = useState("")
	const [recomend, setRecomend] = useState("")
	const [showList, setShowList] = useState(false)
	const [myList, addMyList] = useState([])

	const onClickHandler = (mov) => {
		setMovie(mov)
		console.log(mov)
		const section = document.querySelector("#app");
		section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		const media = mov?.media_type
		if (media === "movie") {
			setRecomend(`/movie/${mov.id}${recomendations}`)
		} else {
			setRecomend(`/tv/${mov.id}${recomendations}`)
		}
	}
	const searchHandler = (txt) => {
		setSearch(txt)
	}
	const closeSearch = (val) => {
		setSearch(val)
	}

	const myListHandler = () => {
		setShowList(!showList)
	}
	const addHandler = (mov) => {
		if (!myList.includes(mov)) {
			addMyList((preVal) => [mov, ...preVal])
		}
	}


	return (
		<div className="home-screen">
			<Nav handleSearch={searchHandler} closeSearch={closeSearch} />
			<Banner movie={movie} addHandler={addHandler} myListHandler={myListHandler} />
			{search !== "" && <Row title="Search Results" fetchURL={movieSearch + search} handleOnClick={onClickHandler} />}
			{(showList && myList.length > 0) && <MyList title="Your List" movies={myList} handleOnClick={onClickHandler} />}
			{recomend !== "" && <Row title="More Like This" fetchURL={recomend} handleOnClick={onClickHandler} />}
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