import { db } from "@/database";
import { FlashcardTable } from "@/database/schema/schema";
import { eq } from "drizzle-orm";

export async function getFlashcardById(flashcardId: string | null) {
    if (!flashcardId) {
        return null;
    }

    const flashcard = await db.query.FlashcardTable.findFirst({
        where: eq(FlashcardTable.id, flashcardId),
    });

    return flashcard;
}
