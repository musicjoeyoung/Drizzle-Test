import 'dotenv/config';

import { drizzle } from "drizzle-orm/mysql2"
import env from "../../env"
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
});

const db = drizzle(poolConnection);
export { db }