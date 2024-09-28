"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = object & {
    children: React.ReactNode;
};

export const PageAnimation: React.FC<Props> = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {props.children}
        </motion.div>
    );
};
