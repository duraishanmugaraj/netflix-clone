import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav({ handleSearch, closeSearch }) {
	const [showNav, setShowNav] = useState(false)
	const [searchClick, setSearchClick] = useState(false)
	const [searchValue, setSearchValue] = useState("")


	const handleNavBar = () => {
		if (window.scrollY > 100) {
			setShowNav(true)
		} else {
			setShowNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleNavBar)
		return () => {
			window.removeEventListener("scroll", handleNavBar)
		}
	}, [])

	const textSubmit = (event) => {
		event.preventDefault();
		handleSearch(searchValue)
	}

	useEffect(() => {
		if (!searchClick) {
			closeSearch("")
		}
	}, [searchClick])

	return (
		<div className={`nav ${showNav && "nav__black"}`}>
			<div className="nav__content">
				<img
					className="nav__logo"
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="netflix logo" />
				{searchClick && <div className="search-box active"><i className="fa fa-search search-box__icon"></i>
					<form onSubmit={textSubmit}>
						<input onChange={(e) => setSearchValue(e.target.value)}
							className="search-box__input"
							placeholder="Search" />
					</form>
				</div>}
				<i onClick={() => setSearchClick(!searchClick)} className={`bi nav__search ${searchClick ? "bi-x-lg" : "bi-search"}`}></i>
				<img className="nav__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="netflix avatar" />
			</div>
		</div>
	);
}

export default Nav;