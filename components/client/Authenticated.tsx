"use client";

import React from "react";
import { useAppAuthStore } from "../../store/auth/app-auth-store";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Unauthenticated } from "./Unauthenticated";
import { Button } from "../ui/button";

type Props = object & {};

export const Authenticated: React.FC<Props> = () => {
    const { user } = useUser();
    const { setCurrentUser } = useAppAuthStore();

    React.useEffect(() => {
        if (!user) {
            return;
        }

        setCurrentUser(user);
    }, [user, setCurrentUser]);

    if (!user) {
        return <Unauthenticated />;
    }

    return (
        <div>
            <div>Authenticated</div>
            <div>{user.fullName}</div>
            <SignOutButton>
                <Button variant={"destructive"}>Sign out</Button>
            </SignOutButton>
        </div>
    );
};
