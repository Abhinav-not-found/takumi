import express from "express";

import type { Application } from "express-serve-static-core";

function appMiddleware(app: Application) {
	app.use(express.json());
}

export default appMiddleware;
