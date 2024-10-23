import { getUserByClerkId } from "@/api/user/get-user-by-clerk-id";
import { DashboardSidebar } from "@/components/dashboard-sidebar/DashboardSidebar";
import { DashboardSidebarTrigger } from "@/components/dashboard-sidebar/DashboardSidebarTrigger";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = object & {
    children: React.ReactNode;
};

const layout: React.FC<Props> = async (props) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    const user = await getUserByClerkId(userId);

    if (!user) {
        return redirect("/settings");
    }

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
