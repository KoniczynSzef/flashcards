"use client";

import React from "react";
import { useAppAuthStore } from "../../store/auth/app-auth-store";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";

type Props = object & {};

export const Profile: React.FC<Props> = () => {
    const store = useAppAuthStore();

    if (store.authState === "loading" || store.isAuthenticating) {
        return <p>Loading...</p>;
    }

    if (store.authState === "guest") {
        return (
            <div>
                <h1 className="text-3xl font-semibold">
                    You are viewing this page as a guest.
                </h1>
                <div className="flex items-center gap-8 my-4">
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
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <h1>Welcome {store.currentUser?.fullName}</h1>

            <SignOutButton>
                <Button variant={"destructive"}>Sign out</Button>
            </SignOutButton>

            <div className="bg-slate-700 self-start my-8 flex items-center justify-center rounded-full p-0.5 scale-150">
                <UserButton />
            </div>
        </div>
    );
};
