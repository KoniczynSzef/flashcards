import React from "react";
import { SidebarFooter } from "../ui/sidebar";
import { SignOut } from "../auth/SignOut";

type Props = object & {};

export const DashboardSidebarFooter: React.FC<Props> = () => {
    return (
        <SidebarFooter>
            <SignOut signOutOptions={{ redirectUrl: "/" }} />
        </SidebarFooter>
    );
};
