import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
    path: ".env.local",
});

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not found in environment variables!");
}

export default defineConfig({
    schema: "database/schema.ts",
    out: "database/migrations",
    dialect: "sqlite",

    strict: true,
    verbose: true,

    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
});
