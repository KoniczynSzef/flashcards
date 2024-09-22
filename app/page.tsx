import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
import Link from "next/link";

type Props = object & {};

const page: React.FC<Props> = async () => {
    const user = await currentUser();

    if (!user) {
        return (
            <div className="p-24 space-x-8">
                <Link href="/sign-up">
                    <Button role="link" tabIndex={-1} variant={"outline"}>
                        Sign up
                    </Button>
                </Link>

                <Link href="/sign-in">
                    <Button role="link" tabIndex={-1}>
                        Sign in
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="p-24">
            <h1>Welcome {user.fullName}</h1>
            <SignOutButton>
                <Button variant={"destructive"}>Sign out</Button>
            </SignOutButton>
        </div>
    );
};

export default page;
