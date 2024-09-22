import { create } from "zustand";
import { AppAuth } from "../../types/auth/app-auth";

export const useAppAuthStore = create<AppAuth>((set) => ({
    isAuthenticating: true,
    authState: "guest",
    currentUser: null,

    setAuthState: (authState) => set({ authState }),
    setIsAuthenticating: (isAuthenticating) => set({ isAuthenticating }),

    setCurrentUser: (currentUser) =>
        set({
            currentUser,
            authState: currentUser ? "authenticated" : "guest",
        }),
}));
