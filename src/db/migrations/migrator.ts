import { drizzle } from "drizzle-orm/mysql2"
import { migrate } from "drizzle-orm/mysql2/migrator"
import mysql from "mysql2/promise";
import path from "path"

const dbMigrate = async () => {
    try {
        const dbConnection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "drizzle_test3",
            password: "Hudson6784$$2"
        });
        const dbMigrator = drizzle(dbConnection);

        await migrate(dbMigrator, {
            migrationsFolder: path.resolve("src/db/migrations")
        });
        console.log("migration complete");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

dbMigrate();