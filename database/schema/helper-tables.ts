import {
    integer,
    primaryKey,
    sqliteTable,
    text,
    unique,
} from "drizzle-orm/sqlite-core";
import { createdAt, DeckTable, FlashcardTable, UserTable } from "./schema";

export const FlashcardProgressTable = sqliteTable(
    "flashcard_progress",
    {
        repetitions: integer("repetitions").$default(() => 0),
        learningStatus: text("learning_status", {
            enum: ["new", "learning", "learned"],
        }).$default(() => "new"),
        incorrectAnswers: integer("incorrect_answers").$default(() => 0),
        lastReviewedAt: integer("last_reviewed_at", {
            mode: "timestamp",
        }).$default(() => new Date()),
        createdAt,

        // Foreign keys
        authorId: text("author_id").references(() => UserTable.id),
        userId: text("user_id")
            .notNull()
            .references(() => UserTable.id),
        flashcardId: text("flashcard_id")
            .notNull()
            .references(() => FlashcardTable.id),
    },
    (table) => ({
        // Declaring many to many relationship
        pk: primaryKey({ columns: [table.userId, table.flashcardId] }),
        uniqueUserId: unique().on(table.userId),
        uniqueFlashcardId: unique().on(table.flashcardId),
    }),
);

export const DeckFlashcardTable = sqliteTable(
    "deck_flashcard",
    {
        deckId: text("deck_id").references(() => DeckTable.id),
        flashcardId: text("flashcard_id").references(() => FlashcardTable.id),

        favorite: integer("favorite", { mode: "boolean" }).$default(
            () => false,
        ),
    },
    (table) => ({
        pk: primaryKey({ columns: [table.deckId, table.flashcardId] }),
        uniqueDeckId: unique().on(table.deckId),
        uniqueFlashcardId: unique().on(table.flashcardId),
    }),
);
