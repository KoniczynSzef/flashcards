"use client";

import React from "react";
import { useAppAuthStore } from "../../../store/auth/app-auth-store";

import { UserDropdown } from "../../navbar/user-dropdown/UserDropdown";
import { AuthLinks } from "../AuthLinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = object & {};

export const Profile: React.FC<Props> = () => {
    const { authState, user } = useAppAuthStore();

    if (authState === "guest") {
        return <AuthLinks />;
    }

    if (!user?.username) {
        return (
            <Link href="/settings" className="link__with__button">
                <Button tabIndex={-1}>Create your profile</Button>
            </Link>
        );
    }

    return <UserDropdown />;
};
