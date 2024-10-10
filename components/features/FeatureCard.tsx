"use client";

import React from "react";

type Props = object & {
    feature: {
        title: string;
        description: string;
        icon: React.ReactElement;
    };
};

export const FeatureCard: React.FC<Props> = (props) => {
    return (
        <li key={props.feature.title} className="flex flex-col gap-2">
            {props.feature.icon}

            <h3 className="text-H3 font-bold">{props.feature.title}</h3>
            <p className="text-sm text-muted-foreground">
                {props.feature.description}
            </p>
        </li>
    );
};

// * Colors here are necessary for TailwindCSS to generate classes for icons in FeatureCard
export const TAILWIND_CLASSES = [
    "bg-blue-700",
    "bg-indigo-700",
    "bg-violet-700",
    "bg-purple-700",
    "bg-fuchsia-700",
    "bg-pink-700",
    "rounded-lg",
    "size-8",
    "p-1",
];
