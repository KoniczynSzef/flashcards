import { db } from "@/database";
import { FlashcardTable } from "@/database/schema/schema";
import { eq } from "drizzle-orm";

// prettier-ignore
export async function deleteFlashcardById(flashcardId: string | null, userId: string | null) {
    if (!flashcardId) {
        return null;
    }

    const existingFlashcard = await db.query.FlashcardTable.findFirst({
        where: eq(FlashcardTable.id, flashcardId),
    });

    // ! There is no existing flashcard with the given flashcard id
    // ! User is not the primary author of the flashcard
    // ! The existing flashcard id does not match the given flashcard id
    if (!existingFlashcard || existingFlashcard.authorId !== userId || existingFlashcard.id !== flashcardId) {
        return null;
    }

    const deletedFlashcard = await db
        .delete(FlashcardTable)
        .where(eq(FlashcardTable.id, flashcardId))
        .returning();

    return deletedFlashcard;
}
