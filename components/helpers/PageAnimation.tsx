"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = object & {
    children: React.ReactNode;
};

export const PageAnimation: React.FC<Props> = (props) => {
    const pathname = usePathname();

    if (pathname === "/learning") {
        return props.children;
    }

    let path: string = "";

    // * This null check is necessary for the test to run and pass

    if (pathname === null || pathname === "/") {
        path = "home";
    } else {
        path = pathname.replace("/", "");
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-testid={`${path}-page`}
            className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-24 px-8 py-16 lg:gap-48 lg:px-24 lg:py-24"
        >
            {props.children}
        </motion.div>
    );
};
