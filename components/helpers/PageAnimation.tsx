"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = object & {
    children: React.ReactNode;
    dataTestId?: string;
};

export const PageAnimation: React.FC<Props> = (props) => {
    const pathname = usePathname();

    if (pathname === "/learning") {
        return props.children;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-24 px-8 py-16 lg:gap-48 lg:px-24 lg:py-24"
            data-testid={props.dataTestId}
        >
            {props.children}
        </motion.div>
    );
};
