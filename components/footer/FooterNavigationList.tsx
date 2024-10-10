import { FooterLink } from "@/types/home/footer-link";
import Link from "next/link";
import React from "react";

type Props = object & {
    listTitle: string;
    links: FooterLink[];
};

export const FooterNavigationList: React.FC<Props> = (props) => {
    return (
        <ul className="flex flex-col gap-4 text-sm">
            <h4 className="mb-2 ml-4 font-semibold text-indigo-50">
                {props.listTitle}
            </h4>

            {props.links.map((link) => (
                <li key={link.title}>
                    <Link
                        href={link.href}
                        className="rounded px-4 py-2 text-gray-300 transition duration-300 hover:text-gray-50 focus:outline-none focus:ring focus:ring-slate-700"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
