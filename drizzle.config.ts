import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "sqlite",
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
        authToken: process.env.DATABASE_AUTH_TOKEN,
    },

    schema: "database/schema.ts",
    driver: "turso",
    migrations: {
        prefix: "none",
    },

    strict: true,
    verbose: true,
});
