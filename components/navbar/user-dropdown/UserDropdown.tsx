"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppAuthStore } from "@/store/auth/app-auth-store";
import { BookOpen, ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

import { useClerk } from "@clerk/nextjs";

type Props = object & {};

export const UserDropdown: React.FC<Props> = () => {
    const { currentUser, authState } = useAppAuthStore();
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const { signOut } = useClerk();

    if (authState === "guest" || authState === "loading") {
        return null;
    }

    if (!currentUser) {
        return null;
    }

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="flex items-center gap-2">
                    {currentUser.fullName}
                    <ChevronDown
                        className={`${isDropdownOpen ? "rotate-180" : ""} transition duration-300`}
                    />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Learning</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-3"
                    tabIndex={-1}
                    asChild
                >
                    <Link href={"/learning"}>
                        <BookOpen className="h-5" />
                        <span>Learn</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-3"
                    tabIndex={-1}
                    asChild
                >
                    <Link href={"/profile"}>
                        <User className="h-5" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-3"
                    tabIndex={-1}
                    asChild
                >
                    <Link href={"/settings"}>
                        <Settings className="h-5" />
                        <span>Settings</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="flex cursor-pointer items-center gap-3"
                    tabIndex={-1}
                    onClick={() =>
                        signOut({
                            redirectUrl: "/",
                        })
                    }
                >
                    <LogOut className="h-5" />
                    <span>Sign out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
