"use client";

import React from "react";
import { useAppAuthStore } from "../../../store/auth/app-auth-store";
import { UserDropdown } from "../../navbar/user-dropdown/UserDropdown";
import { AuthLinks } from "../AuthLinks";
import { SignOut } from "../SignOut";

type Props = object & {};

export const Profile: React.FC<Props> = () => {
    const { authState, user } = useAppAuthStore();

    if (authState === "guest") {
        return <AuthLinks />;
    }

    if (!user?.username) {
        return <SignOut signOutOptions={{ redirectUrl: "/" }} />;
    }

    return <UserDropdown />;
};
