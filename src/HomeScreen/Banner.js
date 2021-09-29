import React from 'react';
import './Banner.css'

function Banner({ movie, myListHandler, addHandler }) {
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str
	}

	return (
		<div className="banner" style={{
			backgroundSize: "cover",
			backgroundImage: `linear-gradient(to right,rgba(1, 1, 1, 1),rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			backgroundPosition: "center"
		}}>
			<div className="banner__contents" >
				<h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
				<div className="banner__buttons">
					<button onClick={() => myListHandler()} className="banner__button">My list</button>
					<button onClick={() => addHandler(movie)} className="banner__button">Add</button>
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