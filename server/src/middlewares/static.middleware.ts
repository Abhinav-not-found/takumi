	import express from "express";
	import type { Response, Request } from "express";
	import path from "path";

	import type { Application } from "express-serve-static-core";

	function staticMiddleware(app: Application) {
		app.use(express.static(path.join(process.cwd(), "public")));

		app.use((_req: Request, res: Response) => {
			res.sendFile(path.join(process.cwd(), "public/index.html"));
		});
	}

	export default staticMiddleware;
