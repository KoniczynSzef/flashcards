import React from "react";

type Props = object & {};

export const Hero: React.FC<Props> = () => {
    return (
        <div>
            <h1 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text py-1 text-center text-6xl font-semibold text-transparent">
                Flashcards that make language learning effortless.
            </h1>
        </div>
    );
};
