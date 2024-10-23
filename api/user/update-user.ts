"use server";

import { db } from "@/database";
import { UserTable } from "@/database/schema/schema";
import { actionClient } from "@/lib/safe-action";
import { profileFormSchema } from "@/schema/profile-form/schema";

import { z } from "zod";

const profileFormSchemaWithClerkId = profileFormSchema.merge(
    z.object({ clerkId: z.string() }),
);

export const updateUser = actionClient
    .schema(profileFormSchemaWithClerkId)
    .action(async ({ parsedInput: data }) => {
        const user = await db
            .update(UserTable)
            .set({
                username: data.username,
                bioDescription: data.bioDescription,
                email: data.email,
                clerkId: data.clerkId,
            })
            .returning();

        if (!user) {
            throw new Error("Error creating user");
        }

        return user;
    });
