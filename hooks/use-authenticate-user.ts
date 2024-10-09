import { useAppAuthStore } from "@/store/auth/app-auth-store";
import { AppUser } from "@/types/auth/app-user";
import { ClerkUser } from "@/types/auth/clerk-user";
import React from "react";

// prettier-ignore
export function useAuthenticateUser(clerkUser: ClerkUser | undefined, user: AppUser) {
    const { isAuthenticating, setIsAuthenticating, setAuthState, setClerkUser, setUser } = useAppAuthStore();

    const authenticateUser = React.useCallback(function authenticateUser() {
        if (!clerkUser && isAuthenticating) {
            setIsAuthenticating(false);

            return "Failed to authenticate"
        }

        if (!clerkUser) {
            setIsAuthenticating(false);
            setAuthState("guest");

            return "Authenticated as guest"
        }

        setAuthState("authenticated");
        setIsAuthenticating(false);
        setClerkUser(clerkUser);
        setUser(user);

        return "Authenticated successfully"
    }, [clerkUser, isAuthenticating, setIsAuthenticating, setAuthState, setClerkUser, setUser, user]);

    return { authenticateUser };
}
