"use client";

import React from "react";
import { toast } from "sonner";

import { useClerk } from "@clerk/nextjs";
import { useAuthenticateUser } from "@/hooks/auth/use-authenticate-user";
import { UserFromDb } from "@/types/database/user-from-db";

type Props = object & {
    user: UserFromDb | null;
    children: React.ReactNode;
};

export const AuthStoreProvider: React.FC<Props> = (props) => {
    const { user: clerkUser } = useClerk();
    const { authenticateUser } = useAuthenticateUser(clerkUser, props.user);

    React.useEffect(() => {
        const messageStatus = authenticateUser();

        if (messageStatus === "Authenticated successfully") {
            toast.success(
                `Authenticated successfully as ${props.user?.username}`,
                { duration: 1500 },
            );
        }
    }, [authenticateUser, props.user]);

    return props.children;
};
