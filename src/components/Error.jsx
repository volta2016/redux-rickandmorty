import React from "react";
import "../assets/styles/components/Error.scss";
import ErrorImage from "../assets/static/images/error.png";

const Error = () => (
	<div className="erro">
		<img src={ErrorImage} alt="Morty Scared" />
		<span>Sorry, an error has occurred</span>
	</div>
);

export default Error;
