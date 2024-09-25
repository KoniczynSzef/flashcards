"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import { useAppAuthStore } from "./app-auth-store";

type Props = object & {
    children: React.ReactNode;
};

export const AuthStoreProvider: React.FC<Props> = (props) => {
    const { user } = useUser();
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
