"use client";

import React from "react";
import { NAVBAR_LINKS } from "../../assets/navbar/navbar-links";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";

type Props = object &
    React.HTMLProps<HTMLUListElement> & {
        handleCloseSheet?: () => void;
    };

export const LinksNavigation: React.FC<Props> = (props) => {
    const path = usePathname();

    return (
        <ul
            className={cn(
                "flex items-center gap-8 font-medium",
                props.className,
            )}
        >
            {NAVBAR_LINKS.map((link) => (
                <li key={link.title}>
                    <Link
                        href={
                            path !== link.href && link.href.startsWith("#")
                                ? `/${link.href}`
                                : link.href
                        }
                        className="rounded px-4 py-2 transition duration-300 hover:bg-accent focus:outline-none focus:ring focus:ring-slate-700"
                        onClick={props.handleCloseSheet}
                        data-testid="navbar-link"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
