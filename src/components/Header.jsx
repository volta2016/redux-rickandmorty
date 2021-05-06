import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions"; //NECESITO disparar la sección
import "../assets/styles/components/Header.scss";
import Logo from "";

const Header = () => {
	const sectionActive = useSelector((state) => state.sectionActive);
	const dispatch = useDispatch();

	const handleSetSelection = useSelector((saction) => {
		dispatch(setSection(section));
	});

	return (
		<header className="header">
			<figure className="header__logo">
				<img className="header__logo-img" src={Logo} alt="" />
			</figure>
			<nav className="hader__nav">
				<ul className="header__nav__options">
					<li
						onClick={() => handleSection("Characters")}
						className={`header__nav__options-item ${
							sectionActive === "Characters" ? "active" : ""
						}`}
					>
						<Link to="/"></Link>
					</li>
					<li
						onClick={() => handleSection("Characters")}
						className={`header__nav__options-item`}
					></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
