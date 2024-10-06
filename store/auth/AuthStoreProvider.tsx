"use client";

import React from "react";
import { useAppAuthStore } from "./app-auth-store";
import { toast } from "sonner";

import { SignOut } from "@clerk/types";
import { useClerk } from "@clerk/nextjs";
import { AppUser } from "@/types/auth/app-user";

type Props = object & {
    user: AppUser;
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
    const { user: clerkUser } = useClerk();

    const {
        setClerkUser,
        setIsAuthenticating,
        setAuthState,
        isAuthenticating,
        setUser,
    } = useAppAuthStore();

    React.useEffect(() => {
        if (!clerkUser && isAuthenticating) {
            return setIsAuthenticating(false);
        }

        if (!clerkUser) {
            setIsAuthenticating(false);
            return setAuthState("guest");
        }

        setAuthState("authenticated");
        setClerkUser(clerkUser);
        setIsAuthenticating(false);
        setUser(props.user);
    }, [
        clerkUser,
        setClerkUser,
        setIsAuthenticating,
        setAuthState,
        isAuthenticating,
        props.user,
        setUser,
    ]);

    return props.children;
};
