"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = object & {};

const ANIMATION_DURATION = 0.15;

export const DottedLoadingIndicator: React.FC<Props> = () => {
    const [currentDotIndex, setCurrentDotIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(
            () => {
                setCurrentDotIndex((prev) => (prev === 2 ? 0 : prev + 1));
            },
            ANIMATION_DURATION * 2 * 1000,
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            role="presentation"
            aria-label="Dotted loading state indicator"
            className="flex items-center gap-2"
        >
            {Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                    key={index}
                    className={`aspect-square h-3 rounded-full bg-[#334155]`}
                    initial={{ scale: 1 }}
                    animate={
                        currentDotIndex === index
                            ? {
                                  scale: [1, 1.25, 1],
                                  backgroundColor: [
                                      "#334155",
                                      "#64748b",
                                      "#334155",
                                  ],
                                  y: [0, -5, 0],
                              }
                            : { scale: 1, backgroundColor: "#334155", y: 0 }
                    }
                    transition={{
                        duration: 0.35,
                    }}
                />
            ))}
        </div>
    );
};
