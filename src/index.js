import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./routes/App";

import { store } from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
