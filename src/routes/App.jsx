import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
import Characters from "../containers/Characters";
import Favorites from "../containers/Favarotites";
import Layout from "../components/Layout";

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={Characters} />
				<Route path="/favorites" component={Favorites} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;
