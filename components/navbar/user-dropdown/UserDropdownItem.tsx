import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";

type Props = object & {
    isLink?: boolean;
    isFocusable?: boolean;
    href?: string;
    icon: React.ReactNode;
    label: string;
    handleClick?: () => void;
    ariaLabel?: string;
};

export const UserDropdownItem: React.FC<Props> = (props) => {
    if (props.isLink) {
        return (
            <DropdownMenuItem
                className="flex cursor-pointer items-center gap-3"
                tabIndex={!props.isFocusable ? -1 : undefined}
                asChild
            >
                <Link href={props.href ?? ""}>
                    {props.icon}
                    <span>{props.label}</span>
                </Link>
            </DropdownMenuItem>
        );
    }

    return (
        <DropdownMenuItem
            className="flex cursor-pointer items-center gap-3"
            onClick={props.handleClick}
            aria-label={props.ariaLabel}
        >
            {props.icon}
            <span>{props.label}</span>
        </DropdownMenuItem>
    );
};
