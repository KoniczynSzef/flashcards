import { AuthState } from "./auth-state";

import { ClerkUser } from "./clerk-user";
import { UserTable } from "@/database/schema/schema";
import { InferSelectModel } from "drizzle-orm";

export type AppAuth = {
    isAuthenticating: boolean;

    authState: AuthState;
    clerkUser: ClerkUser;

    user: InferSelectModel<typeof UserTable> | null;

    setIsAuthenticating: (isAuthenticating: boolean) => void;

    setAuthState: (authState: AuthState) => void;
    setClerkUser: (clerkUser: ClerkUser) => void;
    setUser: (user: InferSelectModel<typeof UserTable> | null) => void;
};
