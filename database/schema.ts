import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// prettier-ignore
const createdAt = integer("created_at", { mode: "timestamp" }).$default(() => new Date());

export const Flashcard = sqliteTable("flashcard", {
    id: text("id"),
    word: text("word"),
    definition: text("definition"),
    translation: text("translation"),
});

export const User = sqliteTable("user", {
    id: text("id"),
    username: text("username"),
    email: text("email").unique(),
    lastLogin: integer("last_login", { mode: "timestamp" }),
    createdAt,
});
