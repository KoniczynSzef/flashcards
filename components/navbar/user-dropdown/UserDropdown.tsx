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
import { UserDropdownItem } from "./UserDropdownItem";
import { handleSignOutWithToast } from "@/store/auth/AuthStoreProvider";

type Props = object & {};

export const UserDropdown: React.FC<Props> = () => {
    const { user, authState } = useAppAuthStore();
    const { signOut } = useClerk();

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    if (authState === "guest" || authState === "loading") {
        return null;
    }

    if (!user) {
        return null;
    }

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="flex items-center gap-2">
                    {user.username}
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
                    handleClick={handleSignOutWithToast.bind(null, signOut)}
                    ariaLabel={"Click to sign out"}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
