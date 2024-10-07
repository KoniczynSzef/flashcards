import { relations } from "drizzle-orm";
import { DeckTable, FlashcardTable, UserTable } from "./schema";
import { DeckFlashcardTable, FlashcardProgressTable } from "./helper-tables";

export const userRelations = relations(UserTable, ({ many }) => ({
    flashcards: many(FlashcardTable),
    decks: many(DeckTable),
    flashcardProgress: many(FlashcardProgressTable),
}));

export const flashcardRelations = relations(
    FlashcardTable,
    ({ one, many }) => ({
        author: one(UserTable, {
            fields: [FlashcardTable.authorId],
            references: [UserTable.id],
        }),

        flashcardProgress: many(FlashcardProgressTable),
        deckFlashcard: many(DeckFlashcardTable),
    }),
);

export const deckRelations = relations(DeckTable, ({ one, many }) => ({
    author: one(UserTable, {
        fields: [DeckTable.authorId],
        references: [UserTable.id],
    }),

    deckFlashcard: many(DeckFlashcardTable),
}));

export const flashcardProgressRelations = relations(
    FlashcardProgressTable,
    ({ one }) => ({
        user: one(UserTable, {
            fields: [FlashcardProgressTable.userId],
            references: [UserTable.id],
        }),

        flashcard: one(FlashcardTable, {
            fields: [FlashcardProgressTable.flashcardId],
            references: [FlashcardTable.id],
        }),
    }),
);

export const deckFlashcardRelations = relations(
    DeckFlashcardTable,
    ({ one }) => ({
        deck: one(DeckTable, {
            fields: [DeckFlashcardTable.deckId],
            references: [DeckTable.id],
        }),

        flashcard: one(FlashcardTable, {
            fields: [DeckFlashcardTable.flashcardId],
            references: [FlashcardTable.id],
        }),
    }),
);
