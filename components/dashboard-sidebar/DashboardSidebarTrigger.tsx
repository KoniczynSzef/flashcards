"use client";

import React from "react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { PanelLeftOpen } from "lucide-react";

type Props = object & {};

export const DashboardSidebarTrigger: React.FC<Props> = () => {
    const { toggleSidebar, open } = useSidebar();

    return (
        <Button
            size={"icon"}
            variant={"ghost"}
            onClick={toggleSidebar}
            className="m-3"
        >
            <PanelLeftOpen className={open ? "rotate-180" : ""} />
        </Button>
    );
};
