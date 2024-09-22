"use client";

import React from "react";
import { useAppAuthStore } from "../store/auth/app-auth-store";

type Props = object & {};

export const Client: React.FC<Props> = () => {
    const store = useAppAuthStore();

    if (store.isAuthenticating) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            Auth State: <pre>{JSON.stringify(store.authState)}</pre>
        </div>
    );
};
