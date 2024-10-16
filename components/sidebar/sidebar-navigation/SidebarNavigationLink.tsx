import { Button } from "@/components/ui/button";
import { SidebarNavigationItem } from "@/types/sidebar/sidebar-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = object & {
    item: SidebarNavigationItem;
};

export const SidebarNavigationLink: React.FC<Props> = (props) => {
    const pathname = usePathname();

    return (
        <Link
            href={props.item.href}
            className="link__with__button w-full rounded"
        >
            <Button
                tabIndex={-1}
                variant={
                    pathname.startsWith(props.item.href) ? "secondary" : "ghost"
                }
                className="flex w-full items-center justify-start gap-4 py-5"
            >
                {props.item.icon}
                <span>{props.item.title}</span>
            </Button>
        </Link>
    );
};
