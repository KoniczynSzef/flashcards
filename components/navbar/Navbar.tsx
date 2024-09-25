import Link from "next/link";
import React from "react";
import { AuthWrapper } from "../auth/AuthWrapper";

type Props = object & {};

export const Navbar: React.FC<Props> = () => {
    return (
        <nav className="container mx-auto flex items-center justify-between py-8">
            <Link
                href="/"
                className="rounded px-4 py-2 text-2xl italic tracking-wider transition duration-300 hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary"
            >
                LangCards
            </Link>

            <AuthWrapper />
        </nav>
    );
};
