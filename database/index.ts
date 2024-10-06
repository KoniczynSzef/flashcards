import { drizzle } from "drizzle-orm/libsql";
import { drizzle as devDrizzle } from "drizzle-orm/better-sqlite3";

import Database from "better-sqlite3";
import { createClient } from "@libsql/client";

import * as schema from "./schema";

// * Create a new SQLite database for development purposes

const sqlite = new Database(process.env.DATABASE_URL);
export const devDb = devDrizzle(sqlite, { schema });

// * Create a new client for production purposes

const client = createClient({
    url: process.env.TURSO_DATABASE_URL as string,
});

export const tursoDb = drizzle(client, { schema });

export const db = process.env.NODE_ENV === "production" ? tursoDb : devDb;
