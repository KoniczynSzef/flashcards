import { AuthState } from "./auth-state";

import { AppUser } from "./app-user";

export type AppAuth = {
    authState: AuthState;
    currentUser: AppUser;

    setAuthState: (authState: AuthState) => void;
    setCurrentUser: (currentUser: AppUser) => void;
};
