import { db } from "@/database";
import { FlashcardTable } from "@/database/schema/schema";
import { eq } from "drizzle-orm";

export async function getAllFlashcardsByAuthorId(authorId: string | null) {
    if (!authorId) {
        return null;
    }

    const flashcards = await db.query.FlashcardTable.findMany({
        where: eq(FlashcardTable.authorId, authorId),
    });

    return flashcards;
}
