import { getUserByClerkId } from "@/api/user/get-user-by-clerk-id";
import { AnimatedSection } from "@/components/helpers/AnimatedSection";
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

    return (
        <AnimatedSection sectionId="learning" sectionIndex={0}>
            <h1>Welcome, {user.username}!</h1>
        </AnimatedSection>
    );
};

export default page;
