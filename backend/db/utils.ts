import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(process.cwd(), '../.env') });

const dbUser = process.env.POSTGRES_APP_USER;
const dbPassword = process.env.POSTGRES_APP_PASSWORD;
const dbHost = process.env.POSTGRES_HOST;
const dbPort = process.env.POSTGRES_PORT;
const dbName = process.env.POSTGRES_DB;

if (!dbUser || !dbPassword || !dbHost || !dbPort || !dbName) {
  throw new Error("Invalid DB env.");
}

export const connectionString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;