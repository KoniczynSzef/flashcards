"use client";

import { useBearStore } from "@/store/test-store";
import React from "react";

type Props = object & {};

export const Client: React.FC<Props> = () => {
    const { bears, increasePopulation, removeAllBears } = useBearStore();

    return (
        <div>
            <button
                className="bg-green-500 p-2 rounded"
                onClick={increasePopulation}
            >
                Increase bears population
            </button>
            <p>{bears}</p>

            <button className="bg-red-500 p-2 rounded" onClick={removeAllBears}>
                Remove all bears
            </button>
        </div>
    );
};
