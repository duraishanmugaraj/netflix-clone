import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { BASE_URL_IMG } from '../request';
import "react-multi-carousel/lib/styles.css";
import './Row.css'

function Row({ title, fetchURL, handleOnClick }) {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(fetchURL)
			setMovies(response.data.results)
			return response
		}
		fetchData()
	}, [fetchURL])

	return (
		<div className="row">
			<h2>{movies.length !== 0 && title}</h2>
			<div className="row__posters">
				{movies.map((movie) => movie.poster_path &&
					<img onClick={() => handleOnClick(movie)}
						className="row__poster row__posterLarge"
						key={movie.id}
						src={BASE_URL_IMG + movie.poster_path}
						alt={movie.name}></img>
				)}
			</div>

		</div>
	);
}

export default Row;