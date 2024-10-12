import { UserFromDb } from "../database/user-from-db";
import { AuthState } from "./auth-state";

import { ClerkUser } from "./clerk-user";

export type AppAuth = {
    isAuthenticating: boolean;

    authState: AuthState;
    clerkUser: ClerkUser;

    user: UserFromDb | null;

    setIsAuthenticating: (isAuthenticating: boolean) => void;

    setAuthState: (authState: AuthState) => void;
    setClerkUser: (clerkUser: ClerkUser) => void;
    setUser: (user: UserFromDb | null) => void;
};
