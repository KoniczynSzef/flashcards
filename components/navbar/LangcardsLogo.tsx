import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/assets/images/langcards.png";

type Props = object & {};

export const LangcardsLogo: React.FC<Props> = () => {
    return (
        <Link
            href="/"
            className="rounded px-4 py-2 transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring lg:mr-80"
        >
            <Image
                src={Logo}
                alt="Logo with brand title"
                width={150}
                height={300}
                data-testid="navbar-logo"
            />
        </Link>
    );
};
