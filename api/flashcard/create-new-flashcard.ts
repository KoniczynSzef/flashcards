import { db } from "@/database";
import { FlashcardTable } from "@/database/schema/schema";
import { FlashcardInsert } from "@/types/database/flashcard";

export async function createNewFlashcard(flashcard: FlashcardInsert) {
    const newFlashcard = await db
        .insert(FlashcardTable)
        .values(flashcard)
        .returning();

    return newFlashcard;
}
