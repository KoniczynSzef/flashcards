"use client";

import { useAppAuthStore } from "@/store/auth/app-auth-store";
import React from "react";

import { motion } from "framer-motion";
import { SidebarStateContext } from "./SidebarStateContext";
import { ExpandSidebarToggle } from "./ExpandSidebarToggle";

type Props = object & {};

export const Sidebar: React.FC<Props> = () => {
    const { user } = useAppAuthStore();

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    return (
        <SidebarStateContext.Provider
            value={{ isSidebarOpen, setIsSidebarOpen }}
        >
            <motion.aside
                animate={{ width: isSidebarOpen ? "20rem" : "4rem" }}
                className="relative flex h-screen w-80 flex-col items-center bg-black px-8 py-24"
                aria-expanded={isSidebarOpen}
            >
                {user?.username[0].toUpperCase()}
                <ExpandSidebarToggle />
            </motion.aside>
        </SidebarStateContext.Provider>
    );
};
