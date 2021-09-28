import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from '../axios';
import './Row.css'

function Row({ title, fetchURL, handleOnClick }) {
	const [movies, setMovies] = useState([])
	const BASE_URL = "https://image.tmdb.org/t/p/original/"
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(fetchURL)
			setMovies(response.data.results)
			return response
		}
		fetchData()
	}, [fetchURL])


	return (
		<div div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{movies.map(movie => movie.poster_path &&
					<img onClick={() => handleOnClick(movie)}
						className="row__poster row__posterLarge"
						key={movie.id}
						src={BASE_URL + movie.poster_path}
						alt={movie.name}></img>)}
			</div>

		</div>
	);
}

export default Row;