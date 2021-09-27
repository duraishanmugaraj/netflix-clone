import React, { useState, useEffect } from 'react';
import axios from "../axios.js"
import requests from "../request"
import './Banner.css'

function Banner(props) {
	const [movie, setMovie] = useState({})
	const fetchData = async () => {
		const response = await axios.get(requests.fetchNetflixOriginals)
		const randomNumber = Math.floor(Math.random() * response.data.results.length - 1)
		setMovie(response.data.results[randomNumber])
		return response
	}
	useEffect(() => {
		fetchData()
	}, [])

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str
	}

	return (
		<div className="banner" style={{
			backgroundSize: "cover",
			backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
			backgroundPosition: "center"

		}}>


			<div className="banner__contents">
				<h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
				<div className="banner__buttons">
					<button className="banner__button">My list</button>
					<button className="banner__button">Play</button>
				</div>
				<div className="banner__description">
					{truncate(movie?.overview, 250)}
				</div>
			</div>
			<div className="banner__fadebottom" />
		</div>
	);
}

export default Banner;