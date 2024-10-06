"use client";

import React from "react";
import { useAppAuthStore } from "./app-auth-store";
import { toast } from "sonner";

import { SignOut } from "@clerk/types";
import { useClerk } from "@clerk/nextjs";

type Props = object & {
    children: React.ReactNode;
};

export async function handleSignOutWithToast(signOut: SignOut) {
    toast.promise(signOut({ redirectUrl: "/" }), {
        loading: "We're signing you out...",
        success: "Signed out successfully",
        error: "Failed to sign out",
    });
}

export const AuthStoreProvider: React.FC<Props> = (props) => {
    const { user } = useClerk();

    const {
        setCurrentUser,
        setIsAuthenticating,
        setAuthState,
        isAuthenticating,
    } = useAppAuthStore();

    React.useEffect(() => {
        if (!user && isAuthenticating) {
            return setIsAuthenticating(false);
        }

        if (!user) {
            setIsAuthenticating(false);
            return setAuthState("guest");
        }

        setAuthState("authenticated");
        setCurrentUser(user);
        setIsAuthenticating(false);
    }, [
        user,
        setCurrentUser,
        setIsAuthenticating,
        setAuthState,
        isAuthenticating,
    ]);

    return props.children;
};
