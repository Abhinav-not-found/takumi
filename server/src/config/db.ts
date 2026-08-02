import mongoose from "mongoose";
import chalk from "chalk";
import env from "./env.js";

const connectDB = async () => {
	try {
		await mongoose.connect(env.MONGODB_URI);
		console.log(chalk.bgGreen("Database connected"));
	} catch (error) {
		console.log("Error connecting to db:", error);
	}
};
export default connectDB
