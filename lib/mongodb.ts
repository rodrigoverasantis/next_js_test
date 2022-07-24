import { Db, MongoClient } from "mongodb";

const MONGO_URI = String(process.env.MONGO_URI);
const DB_NAME = String(process.env.DB_NAME);

// check the MongoDB URI
if (!MONGO_URI) {
	throw new Error("Define the MONGODB_URI environmental variable");
}

// check the MongoDB DB
if (!DB_NAME) {
	throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/**
 * 
 * @returns 
 * @link https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
 */
export async function connectToDatabase() {
	// check the cached.
	if (cachedClient && cachedDb) {
		// load from cache
		return {
			client: cachedClient,
			db: cachedDb,
		};
	}

	// set the connection options
	const opts = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};

	// Connect to cluster
	let client = new MongoClient(MONGO_URI);
	await client.connect();
	let db = client.db(DB_NAME);

	// set cache
	cachedClient = client;
	cachedDb = db;

	return {
		client: cachedClient,
		db: cachedDb,
	};
}