"use server";

import { db } from "@/database";
import { UserTable } from "@/database/schema";
import { actionClient } from "@/lib/safe-action";
import { profileFormSchema } from "@/schema/profile-form/schema";

export const updateUser = actionClient
    .schema(profileFormSchema)
    .action(async ({ parsedInput: data }) => {
        const user = await db
            .update(UserTable)
            .set({
                username: data.username,
                bioDescription: data.bioDescription,
                email: data.email,
            })
            .returning();

        if (!user) {
            throw new Error("Error creating user");
        }

        return user;
    });
