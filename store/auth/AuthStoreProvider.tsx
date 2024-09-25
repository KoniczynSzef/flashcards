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
        authState,
    } = useAppAuthStore();

    React.useEffect(() => {
        console.log(authState);

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
        authState,
    ]);

    return props.children;
};
