import createApp from "./app.js";
import env from "./config/env.js";
import chalk from "chalk";
import connectDB from "./config/db.js";

async function startServer() {
	const app = createApp();

	await connectDB();
	app.listen(env.PORT, () => {
		console.log(chalk.bgCyan(`Server started on port ${env.PORT}`));
	});
}
startServer();
