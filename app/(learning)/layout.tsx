import { DashboardSidebar } from "@/components/dashboard-sidebar/DashboardSidebar";
import { DashboardSidebarTrigger } from "@/components/dashboard-sidebar/DashboardSidebarTrigger";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type Props = object & {
    children: React.ReactNode;
};

const layout: React.FC<Props> = (props) => {
    return (
        <SidebarProvider>
            <div className="flex w-full items-start">
                <DashboardSidebar />
                <DashboardSidebarTrigger />

                {props.children}
            </div>
        </SidebarProvider>
    );
};

export default layout;
