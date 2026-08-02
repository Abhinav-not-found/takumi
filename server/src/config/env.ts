import dotenv from "dotenv";

dotenv.config({ quiet: true });

if (!process.env.MONGODB_URI) {
	throw Error("MONGODB_URI not detected in .env");
}

const env = Object.freeze({
	PORT: process.env.PORT,
	MONGODB_URI: process.env.MONGODB_URI,
});

export default env;
