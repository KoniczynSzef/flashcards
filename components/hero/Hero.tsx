import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Props = object & {};

export const Hero: React.FC<Props> = () => {
    return (
        <div
            className="flex flex-col items-center gap-8 text-center"
            data-testid="hero-section"
        >
            <h1
                className="bg-gradient-to-b from-white to-violet-300 bg-clip-text py-1 text-6xl font-semibold leading-tight text-transparent"
                data-testid="hero-title"
            >
                Flashcards that make language learning effortless.
            </h1>

            <p className="text-muted-foreground" data-testid="hero-description">
                Master new languages quickly, with smart flashcards designed to
                fit into your busy day.
            </p>

            <Link
                href={"/learning"}
                className="group flex w-min rounded transition duration-300 focus:outline-none focus:ring focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
                data-testid="hero-link-cta"
            >
                <Button
                    tabIndex={-1}
                    className="flex items-center gap-2"
                    data-testid="hero-button"
                >
                    Start learning{" "}
                    <ArrowRight className="transition duration-300 group-hover:-rotate-45" />
                </Button>
            </Link>
        </div>
    );
};
