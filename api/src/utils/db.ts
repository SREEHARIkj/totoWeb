// import * as dotenv from "dotenv";
//  dotenv.config();
import mysql from "mysql";
import { drizzle } from "drizzle-orm/mysql2";

export const db_pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB,
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export const db_drizzel_pool = drizzle(db_pool);
 