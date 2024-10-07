import { db } from "@/database";
import { UserTable } from "@/database/schema/schema";
import { eq } from "drizzle-orm";

export async function getUserByClerkId(clerkId: string | null) {
    if (!clerkId) {
        return null;
    }

    const user = await db.query.UserTable.findFirst({
        where: eq(UserTable.clerkId, clerkId),
    });

    return user;
}
