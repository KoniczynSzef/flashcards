"use client";

import React from "react";
import { AuthState } from "../auth/AuthState";

import { LinksNavigation } from "./LinksNavigation";
import { MobileSheet } from "./mobile-sheet/MobileSheet";
import { usePathname } from "next/navigation";
import { LangcardsLogo } from "./LangcardsLogo";

type Props = object & {};

export const Navbar: React.FC<Props> = () => {
    const pathname = usePathname();

    if (pathname === "/learning") {
        return null;
    }

    return (
        <nav
            className="mx-8 flex items-center justify-between py-8 xl:mx-auto xl:max-w-7xl"
            data-testid="navbar"
        >
            <LangcardsLogo />

            <LinksNavigation className="mx-auto hidden xl:flex" />
            <AuthState className="ml-auto hidden xl:block" />

            <MobileSheet />
        </nav>
    );
};
