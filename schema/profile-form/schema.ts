import { z } from "zod";

export const profileFormSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at most 20 characters long"),
    bioDescription: z
        .string()
        .max(1000, "Bio must be at most 1000 characters long")
        .optional(),
    email: z.string().email("Invalid email address"),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
