import { db } from "@/database";
import { FlashcardTable } from "@/database/schema/schema";
import { Flashcard } from "@/types/database/flashcard";

export async function createNewFlashcard(flashcard: Flashcard) {
    const newFlashcard = await db
        .insert(FlashcardTable)
        .values(flashcard)
        .returning();

    return newFlashcard;
}
