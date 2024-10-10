import Link from "next/link";
import React from "react";
import { AuthenticationState } from "../auth/AuthState";
import Image from "next/image";

import Logo from "../../assets/images/langcards.png";
import { LinksNavigation } from "./LinksNavigation";
import { MobileSheet } from "./MobileSheet";

type Props = object & {};

export const Navbar: React.FC<Props> = () => {
    return (
        <nav
            className="mx-8 flex items-center justify-between py-8 lg:mx-auto lg:max-w-7xl"
            data-testid="navbar"
        >
            <Link
                href="/"
                className="rounded px-4 py-2 text-2xl italic tracking-wider transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-slate-700 lg:mr-80"
            >
                <Image
                    src={Logo}
                    alt="Logo with brand title"
                    width={150}
                    height={80}
                    data-testid="navbar-logo"
                />
            </Link>

            <LinksNavigation className="hidden lg:flex" />
            <AuthenticationState className="ml-auto hidden lg:block" />

            <MobileSheet />
        </nav>
    );
};
