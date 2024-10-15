"use client";

import React from "react";

import { SidebarNavigation } from "./sidebar-navigation/SidebarNavigation";

type Props = object & {};

export const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="relative flex h-screen w-80 flex-col items-center bg-black px-8 py-24">
            <SidebarNavigation />
        </aside>
    );
};
