import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// prettier-ignore
export const createdAt = integer("created_at", { mode: "timestamp" }).$default(() => new Date());
export const languageLevel = text("language_level", {
    enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
});

export const UserTable = sqliteTable("user", {
    id: text("id")
        .notNull()
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    username: text("username").notNull(),
    bioDescription: text("bio_description"),
    email: text("email").unique(),
    lastLoginAt: integer("last_login_at", { mode: "timestamp" }).$default(
        () => new Date(),
    ),
    createdAt,
    clerkId: text("clerk_id").unique().notNull(), // Clerk ID is a unique identifier for the user in the Clerk auth database
});

export const FlashcardTable = sqliteTable("flashcard", {
    id: text("id")
        .notNull()
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    word: text("word").notNull(),
    definition: text("definition").notNull(),
    translation: text("translation").notNull(),
    languageLevel,
    category: text("category"), // Separated by commas -> e.g. "food", "animals", "verbs"
    createdAt,

    // Foreign keys
    authorId: text("author_id")
        .notNull()
        .references(() => UserTable.id),
});

export const DeckTable = sqliteTable("deck", {
    id: text("id")
        .notNull()
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description"),
    languageLevel,
    isShared: integer("is_shared", { mode: "boolean" }).$default(() => false),
    createdAt,

    // Foreign keys
    authorId: text("author_id")
        .notNull()
        .references(() => UserTable.id),
});
