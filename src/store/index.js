import logger from "redux-logger";
import reducer from "./reducers";
import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";

const initialState = {
	favoriteCharacters: [],
	sectionActive: "Characters", //section Active
};

const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	initialState,
	composeEnhanders(applyMiddleware(logger))
);
