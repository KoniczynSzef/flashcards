"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppAuthStore } from "@/store/auth/app-auth-store";
import { BookOpen, ChevronDown, LogOut, Settings, User } from "lucide-react";

import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import { UserDropdownItem } from "./UserDropdownItem";

type Props = object & {};

export const UserDropdown: React.FC<Props> = () => {
    const { currentUser, authState } = useAppAuthStore();
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const { signOut } = useClerk();

    async function handleSignOut() {
        toast.promise(signOut({ redirectUrl: "/" }), {
            loading: "We're signing you out...",
            success: "Signed out successfully",
            error: "Failed to sign out",
        });
    }

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

                <UserDropdownItem
                    isLink
                    href={"/learning"}
                    icon={<BookOpen className="h-5" />}
                    label={"Learn"}
                />

                <DropdownMenuSeparator />

                <DropdownMenuLabel>Account</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <UserDropdownItem
                    isLink
                    href={"/profile"}
                    icon={<User className="h-5" />}
                    label={"Profile"}
                />

                <UserDropdownItem
                    isLink
                    href={"/settings"}
                    icon={<Settings className="h-5" />}
                    label={"Settings"}
                />

                <DropdownMenuSeparator />

                <UserDropdownItem
                    isFocusable
                    icon={<LogOut className="h-5" />}
                    label={"Sign out"}
                    handleClick={handleSignOut}
                    ariaLabel={"Click to sign out"}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
