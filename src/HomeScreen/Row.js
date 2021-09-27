import React, { useState, useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import axios from '../axios';
import './Row.css'

function Row({ title, fetchURL, isLargeRow }) {
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
				{movies.map(movie => ((isLargeRow && movie.poster_path) || (movie.backdrop_path)) &&
					<img
						className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
						key={movie.id}
						src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}></img>)}
			</div>

		</div >
	);
}

export default Row;