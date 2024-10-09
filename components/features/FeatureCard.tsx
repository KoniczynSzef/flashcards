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
            <h3 className="font-medium">{props.feature.title}</h3>
            <p className="text-sm text-muted-foreground">
                {props.feature.description}
            </p>
        </li>
    );
};
