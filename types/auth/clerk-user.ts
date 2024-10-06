import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

export type ClerkUser =
    | User
    | NonNullable<ReturnType<typeof useUser>["user"]>
    | null;
