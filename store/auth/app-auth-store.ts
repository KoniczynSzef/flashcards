import { create } from "zustand";
import { AppAuth } from "../../types/auth/app-auth";

export const useAppAuthStore = create<AppAuth>((set) => ({
    isAuthenticating: true,
    authState: "loading",
    clerkUser: null,
    user: null,

    setAuthState: (authState) => set({ authState }),
    setIsAuthenticating: (isAuthenticating) => set({ isAuthenticating }),

    setClerkUser: (clerkUser) => set({ clerkUser }),
    setUser: (user) => set({ user }),
}));
