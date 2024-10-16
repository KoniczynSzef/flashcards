import { FooterLink } from "@/types/home/footer-link";
import Link from "next/link";
import React from "react";

type Props = object & {
    listTitle: string;
    links: FooterLink[];
};

export const FooterNavigationList: React.FC<Props> = (props) => {
    return (
        <ul className="flex flex-col gap-2 text-sm">
            <h4 className="mb-4 ml-4 font-semibold text-indigo-50">
                {props.listTitle}
            </h4>

            {props.links.map((link) => (
                <li key={link.title} className="flex">
                    <Link
                        href={link.href}
                        className="group self-start rounded px-4 py-2 text-indigo-300 transition duration-300 focus:outline-none focus:ring"
                    >
                        {link.title}
                        <div
                            className="h-[1px] w-0 origin-left translate-y-0.5 rounded-full bg-indigo-300 transition-all duration-300 group-hover:w-full"
                            role="presentation"
                            aria-label="This div is for an underline hover effect"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
