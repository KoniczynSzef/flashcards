"use client";

import React from "react";
import { toast } from "sonner";

import { useClerk } from "@clerk/nextjs";
import { AppUser } from "@/types/auth/app-user";
import { useAuthenticateUser } from "@/hooks/auth/use-authenticate-user";

type Props = object & {
    user: AppUser;
    children: React.ReactNode;
};

export const AuthStoreProvider: React.FC<Props> = (props) => {
    const { user: clerkUser } = useClerk();
    const { authenticateUser } = useAuthenticateUser(clerkUser, props.user);

    React.useEffect(() => {
        const messageStatus = authenticateUser();

        if (messageStatus === "Authenticated successfully") {
            toast.success("Authenticated successfully", { duration: 1500 });
        }
    }, [authenticateUser]);

    return props.children;
};
