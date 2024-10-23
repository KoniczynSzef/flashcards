import { getUserByClerkId } from "@/api/user/get-user-by-clerk-id";
import { AnimatedSection } from "@/components/helpers/AnimatedSection";
import { NotLoggedIn } from "@/components/learning/NotLoggedIn";
import { auth } from "@clerk/nextjs/server";
import React from "react";

type Props = object & {};

const page: React.FC<Props> = async () => {
    const { userId } = auth();

    const user = await getUserByClerkId(userId);

    if (!user) {
        return <NotLoggedIn />;
    }

    return (
        <AnimatedSection
            sectionId="learning"
            sectionIndex={0}
            className="flex flex-col py-24"
        >
            <h1 className="mx-auto">Welcome, {user.username}!</h1>
        </AnimatedSection>
    );
};

export default page;
