// import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";

const initialState = {
	favoriteCharacters: [],
	sectionActive: "Characters", //section Active
};

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

// const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	initialState,
	applyMiddleware(...middlewares)
);
