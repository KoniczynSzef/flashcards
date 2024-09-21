import { create } from "zustand";
import { AppAuth } from "../../types/auth/app-auth";

export const useAppAuthStore = create<AppAuth>((set) => ({
    authState: "guest",
    currentUser: null,

    setAuthState: (authState) => set({ authState }),

    setCurrentUser: (currentUser) => set({ currentUser }),
}));
