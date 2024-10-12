import React from "react";
import { cn } from "../../lib/utils";
import { AuthLoading } from "./AuthLoading";
import { LoadedAuthState } from "./LoadedAuthState";

type Props = object & React.HTMLProps<HTMLDivElement> & {};

export const AuthState: React.FC<Props> = (props) => {
    return (
        <div className={cn("auth-wrapper", props.className)}>
            <AuthLoading />

            <LoadedAuthState />
        </div>
    );
};
