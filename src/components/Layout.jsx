import React from "react";
import "./assets/styles/components/layout.css";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
	<div className="layout">
		<header />
		{children}
		<footer />
	</div>;
);

export default Layout;
