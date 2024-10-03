import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// prettier-ignore
const createdAt = integer("created_at", { mode: "timestamp" }).$default(() => new Date());

export const Flashcard = sqliteTable("flashcard", {
    id: text("id")
        .notNull()
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    word: text("word"),
    definition: text("definition"),
    translation: text("translation"),
    createdAt,
});

export const User = sqliteTable("user", {
    id: text("id")
        .notNull()
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    username: text("username").notNull(),
    bioDescription: text("bio_description"),
    email: text("email").unique(),
    lastLogin: integer("last_login", { mode: "timestamp" }),
    createdAt,
});
