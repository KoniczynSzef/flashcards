"use client";

import React from "react";

import { SidebarNavigation } from "./sidebar-navigation/SidebarNavigation";

import Link from "next/link";
import { PanelTop } from "lucide-react";

type Props = object & {};

export const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="relative flex h-screen w-80 flex-col items-center gap-16 bg-black px-8 py-8">
            <Link
                href={"/"}
                className="flex w-full items-center gap-2 rounded px-4 py-2 font-semibold transition duration-300 hover:bg-accent focus:outline-none focus:ring"
            >
                <PanelTop />
                LangCards
            </Link>

            <SidebarNavigation />
        </aside>
    );
};
