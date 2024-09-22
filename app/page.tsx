import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";

type Props = object & {};

const page: React.FC<Props> = async () => {
    const user = await currentUser();

    if (!user) {
        return (
            <div className="p-24">
                <SignInButton>
                    <Button>Sign in</Button>
                </SignInButton>
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
