import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose } from "redux"; //genera un acla, podemos anclar monitoreo del stores
import { createStore, applyMiddleware } from "redux"; //Crea un store global, pasamos un midelware a la def de sotore
import { logger } from "redux-logger";
import reducer from "./reducers"; //def files reducer
import App from "./routes/App";

const initialState = {
	favoriteCharacters: [],
	sectionActive: "Characters",
};
//def state global

const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux devtools

const store = createStore(
	reducer,
	initialState,
	composeEnhanders(applyMiddleware(logger))
);
//compose

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, //HOC para disponibilizar
	document.getElementById("root")
);
