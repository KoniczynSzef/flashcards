import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ServerAuthProvider } from "@/components/auth/ServerAuthProvider";

type Props = object & {
    children: React.ReactNode;
};

export const Providers: React.FC<Props> = (props) => {
    return (
        <ClerkProvider>
            <ServerAuthProvider>{props.children}</ServerAuthProvider>
        </ClerkProvider>
    );
};
