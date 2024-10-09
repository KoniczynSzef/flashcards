"use client";

import React from "react";
import { useAppAuthStore } from "../../store/auth/app-auth-store";
import { Button } from "../ui/button";

import { motion } from "framer-motion";
import { UserDropdown } from "../navbar/user-dropdown/UserDropdown";
import { useClerk } from "@clerk/nextjs";
import { handleSignOutWithToast } from "@/store/auth/AuthStoreProvider";
import { AuthLinks } from "./AuthLinks";

type Props = object & {};

export function ProfileWrapper(props: { children: React.ReactNode }) {
    return (
        <motion.div
            className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            data-testid="profile-wrapper"
        >
            {props.children}
        </motion.div>
    );
}

export const Profile: React.FC<Props> = () => {
    const { authState, user } = useAppAuthStore();
    const { signOut } = useClerk();

    async function handleSignOut() {
        await handleSignOutWithToast(signOut);
    }

    if (authState === "guest") {
        return <AuthLinks />;
    }

    if (!user?.username) {
        return (
            <Button role="button" variant="destructive" onClick={handleSignOut}>
                Sign out
            </Button>
        );
    }

    return <UserDropdown />;
};
