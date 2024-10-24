import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarNavigationItem } from "@/types/sidebar/sidebar-navigation";
import Link from "next/link";
import React from "react";

type Props = object & {
    item: SidebarNavigationItem;
};

export const SidebarNavigationLink: React.FC<Props> = (props) => {
    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <Link
                    href={props.item.href}
                    className="flex w-full items-center gap-2 transition duration-300 hover:bg-accent focus:outline-none focus:ring"
                >
                    {props.item.icon}
                    {props.item.title}
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};
