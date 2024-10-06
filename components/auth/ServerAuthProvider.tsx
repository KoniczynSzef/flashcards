import { getUserByClerkId } from "@/api/user/get-user-by-clerk-id";
import { AuthStoreProvider } from "@/store/auth/AuthStoreProvider";
import { auth } from "@clerk/nextjs/server";
import React from "react";

type Props = object & {
    children: React.ReactNode;
};

export const ServerAuthProvider: React.FC<Props> = async (props) => {
    const { userId } = auth();
    console.log(userId);

    const user = (await getUserByClerkId(userId)) || null;

    return <AuthStoreProvider user={user}>{props.children}</AuthStoreProvider>;
};
