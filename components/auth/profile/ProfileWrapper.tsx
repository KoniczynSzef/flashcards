"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = object & {
    children: React.ReactNode;
};

export const ProfileWrapper: React.FC<Props> = (props) => {
    return (
        <motion.div
            className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            data-testid="profile-wrapper"
        >
            {props.children}
        </motion.div>
    );
};
