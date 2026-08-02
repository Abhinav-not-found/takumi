import express from "express";
import appMiddleware from "./middlewares/app.middleware.js";
import indexRoute from "./routes/index.route.js";
import staticMiddleware from "./middlewares/static.middleware.js";

function createApp() {
	const app = express();

	appMiddleware(app);

	app.use("/api", indexRoute);

	staticMiddleware(app);
	return app;
}
export default createApp;
