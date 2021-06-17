import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
	<footer className="footer">
		<div className="footer__made">
			Made with{" "}
			<span role="img" aria-label="heart">
				❤️
			</span>{" "}
			by
			<a
				href="https://voltauxui.cl/"
				rel="noopener noreferrer"
				target="_blank"
				className="logo"
			>
				<span className="logo-img">&lt;&gt;</span> <span>volta2016</span>
			</a>
		</div>
		<div className="footer__location">
			<span></span>
		</div>
	</footer>
);

export default Footer;
