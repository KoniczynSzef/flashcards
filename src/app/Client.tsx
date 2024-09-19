"use client";

import { Button } from "@/components/ui/button";
import { useBearStore } from "@/store/test-store";
import React from "react";

type Props = object & {};

export const Client: React.FC<Props> = () => {
    const { bears, increasePopulation, removeAllBears } = useBearStore();

    return (
        <div>
            <Button onClick={increasePopulation}>
                Increase bears population
            </Button>
            <p>{bears}</p>

            <Button variant={"destructive"} onClick={removeAllBears}>
                Remove all bears
            </Button>
        </div>
    );
};
