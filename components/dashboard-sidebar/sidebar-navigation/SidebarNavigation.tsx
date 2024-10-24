import { SIDEBAR_NAVIGATION } from "@/assets/sidebar/sidebar-navigation";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/ui/sidebar";
import React from "react";
import { SidebarNavigationLink } from "./SidebarNavigationLink";

type Props = object & {};

export const SidebarNavigation: React.FC<Props> = () => {
    return SIDEBAR_NAVIGATION.groups.map((group, index) => (
        <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {group.items.map((item, groupIndex) => (
                        <SidebarNavigationLink key={groupIndex} item={item} />
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    ));
};
