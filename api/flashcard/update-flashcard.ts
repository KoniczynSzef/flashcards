import { db } from "@/database";
import { FlashcardTable } from "@/database/schema/schema";
import { Flashcard } from "@/types/database/flashcard";
import { eq } from "drizzle-orm";

// prettier-ignore
export async function updateFlashcard(flashcard: Flashcard, userId: string | null) {
    if (!userId) {
        return null;
    }

    const existingFlashcard = await db.query.FlashcardTable.findFirst({
        where: eq(FlashcardTable.id, flashcard.id),
    })

    // ! There is no existing flashcard with the given flashcard id
    // ! User is not the primary author of the flashcard
    // ! The existing flashcard id does not match the given flashcard id
    if(!existingFlashcard || existingFlashcard.authorId !== userId || existingFlashcard.id !== flashcard.id) {
        return null;
    }

    const updatedFlashcard = await db
        .update(FlashcardTable)
        .set(flashcard)
        .where(eq(FlashcardTable.id, flashcard.id))
        .returning();

    return updatedFlashcard;
}
