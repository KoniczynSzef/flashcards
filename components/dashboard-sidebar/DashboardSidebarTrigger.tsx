"use client";

import React from "react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { PanelLeftOpen } from "lucide-react";

import { motion } from "framer-motion";

type Props = object & {};

export const DashboardSidebarTrigger: React.FC<Props> = () => {
    const { toggleSidebar, open } = useSidebar();

    return (
        <motion.div
            animate={
                open
                    ? { margin: "0.5rem 2rem 2rem 0.5rem" }
                    : { margin: "2rem" }
            }
        >
            <Button size={"icon"} variant={"ghost"} onClick={toggleSidebar}>
                <PanelLeftOpen className={open ? "rotate-180" : ""} />
            </Button>
        </motion.div>
    );
};
