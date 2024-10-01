import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const flashcards = sqliteTable("flashcard", {
    id: text("id"),
    word: text("word"),
    definition: text("definition"),
    translation: text("translation"),
});
