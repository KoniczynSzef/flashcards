"use client";

import React from "react";
import { useAppAuthStore } from "../../store/auth/app-auth-store";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";

import { motion } from "framer-motion";

type Props = object & {};

export function ProfileWrapper(props: { children: React.ReactNode }) {
    return (
        <motion.div
            className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
        >
            {props.children}
        </motion.div>
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
