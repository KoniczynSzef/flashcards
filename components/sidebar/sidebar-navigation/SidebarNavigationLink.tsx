import { SidebarNavigationItem } from "@/types/sidebar/sidebar-navigation";
import Link from "next/link";
import React from "react";

type Props = object & {
    item: SidebarNavigationItem;
};

export const SidebarNavigationLink: React.FC<Props> = (props) => {
    // TODO: Implement active link state and focus state

    return (
        <Link
            href={props.item.href}
            className="flex w-full items-center gap-2 rounded bg-none px-4 py-2 text-gray-400 transition duration-300 hover:bg-accent"
        >
            {props.item.icon}
            <span>{props.item.title}</span>
        </Link>
    );
};
