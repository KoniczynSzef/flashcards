import { z } from "zod";

export const profileFormSchema = z.object({
    username: z.string().min(3).max(20),
    bioDescription: z.string().max(1000).optional(),
    email: z.string().email(),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
