"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = object &
    React.HTMLAttributes<HTMLDivElement> & {
        children: React.ReactNode;
        sectionId: string;
        sectionIndex: number;
    };

export const AnimatedSection: React.FC<Props> = (props) => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const isVisible = useInView(sectionRef, { once: true, margin: "100px" });

    return (
        <motion.section
            initial={{ opacity: 0, y: 5 }}
            animate={isVisible && { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            ref={sectionRef}
            className={cn("w-full", props.className)}
            id={props.sectionId}
        >
            {props.children}
        </motion.section>
    );
};
