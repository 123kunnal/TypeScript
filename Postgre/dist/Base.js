"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client } = require('pg');
const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_q58pKAGkBtnP@ep-nameless-bar-a1wxodd8-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
async function main() {
    try {
        await client.connect();
        await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        houseNo INT NOT NULL
      );
    `);
        console.log("Table created successfully");
        const inserting = await client.query(`
        INSERT INTO USERS(name,houseNo) VALUES($1,$2)
        `, ['kunnal', 369]);
        const data = await client.query("SELECT * FROM users;");
        console.log("Data:", data.rows);
    }
    catch (err) {
        console.error("Error:", err);
    }
    finally {
        await client.end();
    }
}
main();
//# sourceMappingURL=Base.js.map