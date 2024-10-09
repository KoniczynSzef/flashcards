import { ClerkLoading } from "@clerk/nextjs";
import React from "react";
import { DottedLoadingIndicator } from "../loading/DottedLoadingIndicator";

type Props = object & {};

export const AuthLoading: React.FC<Props> = () => {
    return (
        <ClerkLoading>
            <DottedLoadingIndicator />
        </ClerkLoading>
    );
};
