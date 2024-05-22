import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Mount fn to start app

const mount = (el) => {
	ReactDom.render(<App />, el);
};

//Dev

if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_marketing-dev-root");

	if (devRoot) {
		mount(devRoot);
	}
}

//Container
export { mount };
