import { db } from "@/database";
import { FlashcardTable, UserTable } from "@/database/schema/schema";
import { eq } from "drizzle-orm";

// This function retrieves all flashcards created by a user with a specific Clerk ID

// prettier-ignore
export async function getAllFlashcardsByClerkAuthorId(clerkAuthorId: string | null | undefined) {
    if (!clerkAuthorId) {
        return [];
    }

    const user = await db.query.UserTable.findFirst({
        where: eq(UserTable.clerkId, clerkAuthorId),
    })

    if (!user) {
        return [];
    }

    const flashcards = await db.query.FlashcardTable.findMany({
        where: eq(FlashcardTable.authorId, user.id),
    });

    return flashcards;
}
