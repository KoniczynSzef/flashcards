"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import { useAppAuthStore } from "./app-auth-store";

type Props = object & {
    children: React.ReactNode;
};

export const AuthStoreProvider: React.FC<Props> = (props) => {
    const { user } = useUser();
    const { setCurrentUser, setIsAuthenticating } = useAppAuthStore();

    React.useEffect(() => {
        if (!user) {
            return;
        }

        setCurrentUser(user);
        setIsAuthenticating(false);
    }, [user, setCurrentUser, setIsAuthenticating]);
    return props.children;
};
