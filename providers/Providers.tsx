import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { AuthStoreProvider } from "../store/auth/AuthStoreProvider";

type Props = object & {
    children: React.ReactNode;
};

export const Providers: React.FC<Props> = (props) => {
    return (
        <ClerkProvider>
            <AuthStoreProvider>{props.children}</AuthStoreProvider>
        </ClerkProvider>
    );
};
