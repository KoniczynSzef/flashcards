"use client";

import React from "react";
import { useAppAuthStore } from "../../store/auth/app-auth-store";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";

type Props = object & {};

export function ProfileWrapper(props: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-8 w-full justify-center">
            {props.children}
        </div>
    );
}

export const Profile: React.FC<Props> = () => {
    const { authState } = useAppAuthStore();

    if (authState === "guest") {
        return (
            <>
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
            </>
        );
    }

    return (
        <>
            <div className="flex items-center justify-center rounded-full">
                <UserButton />
            </div>

            <SignOutButton>
                <Button variant={"destructive"}>Sign out</Button>
            </SignOutButton>
        </>
    );
};
