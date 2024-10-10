"use client";

import React from "react";
import { useAppAuthStore } from "../../../store/auth/app-auth-store";
import { Button } from "../../ui/button";

import { UserDropdown } from "../../navbar/user-dropdown/UserDropdown";
import { useClerk } from "@clerk/nextjs";
import { AuthLinks } from "../AuthLinks";
import { useSignOutWithToast } from "@/hooks/auth/use-sign-out-with-toast";

type Props = object & {};

export const Profile: React.FC<Props> = () => {
    const { authState, user } = useAppAuthStore();
    const { signOut } = useClerk();

    const signOutWithToast = useSignOutWithToast(signOut);

    if (authState === "guest") {
        return <AuthLinks />;
    }

    if (!user?.username) {
        return (
            <Button
                role="button"
                variant="destructive"
                onClick={signOutWithToast}
            >
                Sign out
            </Button>
        );
    }

    return <UserDropdown />;
};
