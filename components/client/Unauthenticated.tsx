"use client";

import React from "react";
import { useAppAuthStore } from "../../store/auth/app-auth-store";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

type Props = object & {};

export const Unauthenticated: React.FC<Props> = () => {
    const { authState } = useAppAuthStore();

    return (
        <div>
            {authState === "guest" && (
                <>
                    <div>You are in guest mode</div>
                    <SignInButton>
                        <Button>Sign in</Button>
                    </SignInButton>
                </>
            )}
        </div>
    );
};
