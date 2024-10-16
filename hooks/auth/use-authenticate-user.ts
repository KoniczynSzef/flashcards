import { useAppAuthStore } from "@/store/auth/app-auth-store";
import { ClerkUser } from "@/types/auth/clerk-user";
import { UserFromDb } from "@/types/database/user-from-db";
import React from "react";

export function useAuthenticateUser(
    clerkUser: ClerkUser | undefined,
    user: UserFromDb | null,
) {
    const {
        isAuthenticating,
        setIsAuthenticating,
        setAuthState,
        setClerkUser,
        setUser,
    } = useAppAuthStore();

    const authenticateUser = React.useCallback(
        function () {
            if (!clerkUser && isAuthenticating) {
                setIsAuthenticating(false);

                return "Failed to authenticate";
            }

            if (!clerkUser) {
                setIsAuthenticating(false);
                setAuthState("guest");

                return "Authenticated as guest";
            }

            setAuthState("authenticated");
            setIsAuthenticating(false);
            setClerkUser(clerkUser);
            setUser(user);

            return "Authenticated successfully";
        },
        [
            clerkUser,
            isAuthenticating,
            setIsAuthenticating,
            setAuthState,
            setClerkUser,
            setUser,
            user,
        ],
    );

    return { authenticateUser };
}
