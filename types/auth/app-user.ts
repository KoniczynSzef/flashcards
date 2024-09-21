import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

export type AppUser =
    | User
    | NonNullable<ReturnType<typeof useUser>["user"]>
    | null;
