import { getUserByClerkId } from "@/api/user/get-user-by-clerk-id";
import { NotLoggedIn } from "@/components/learning/NotLoggedIn";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

type Props = object & {};

const page: React.FC<Props> = async () => {
    const clerkUser = await currentUser();

    if (!clerkUser) {
        return <NotLoggedIn />;
    }

    const user = await getUserByClerkId(clerkUser.id);

    if (!user) {
        return <NotLoggedIn />;
    }

    return <div>Learning page</div>;
};

export default page;
