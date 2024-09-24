import { AuthState } from "./auth-state";

import { AppUser } from "./app-user";

export type AppAuth = {
    isAuthenticating: boolean;

    authState: AuthState;
    currentUser: AppUser;

    setIsAuthenticating: (isAuthenticating: boolean) => void;

    setAuthState: (authState: AuthState) => void;
    setCurrentUser: (currentUser: AppUser) => void;
};
