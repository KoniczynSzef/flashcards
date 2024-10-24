"use client";

import React from "react";

import { PanelTop } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";
import { DashboardSidebarFooter } from "./DashboardSidebarFooter";
import { SidebarNavigation } from "./sidebar-navigation/SidebarNavigation";

type Props = object & {};

export const DashboardSidebar: React.FC<Props> = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <Link
                    href={"/"}
                    className="flex w-full items-center gap-2 rounded px-4 py-2 font-semibold transition duration-300 hover:bg-accent focus:outline-none focus:ring"
                >
                    <PanelTop />
                    LangCards
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarNavigation />
            </SidebarContent>
            <DashboardSidebarFooter />
        </Sidebar>
    );
};
