import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav(props) {
	const [showNav, setShowNav] = useState(false)

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

	return (
		<div className={`nav ${showNav && "nav__black"}`}>
			<div className="nav__content">
				<img
					className="nav__logo"
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="netflix logo" />
				<img className="nav__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="netflix avatar" />
			</div>
		</div>
	);
}

export default Nav;