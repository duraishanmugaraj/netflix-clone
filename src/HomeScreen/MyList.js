import React from 'react'
import "./Row.css"
import { BASE_URL_IMG } from "../request"

function MyList({ movies, title, handleOnClick }) {
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
	)
}

export default MyList
