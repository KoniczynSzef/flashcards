"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import { useAppAuthStore } from "./app-auth-store";

type Props = object & {
    children: React.ReactNode;
};

export const AuthStoreProvider: React.FC<Props> = (props) => {
    const { user } = useUser();
    const { setCurrentUser } = useAppAuthStore();

    React.useEffect(() => {
        console.log("rendered AuthStoreProvider");

        if (!user) {
            return;
        }

        setCurrentUser(user);
    }, [user, setCurrentUser]);
    return props.children;
};
