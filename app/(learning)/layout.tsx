import { DashboardSidebar } from "@/components/dashboard-sidebar/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

type Props = object & {
    children: React.ReactNode;
};

const layout: React.FC<Props> = (props) => {
    return (
        <div className="flex items-start">
            <SidebarProvider>
                <DashboardSidebar />
                <SidebarTrigger className="m-8" />
            </SidebarProvider>

            <div className="mx-auto mr-auto w-full bg-red-400 py-24">
                {props.children}
            </div>
        </div>
    );
};

export default layout;
