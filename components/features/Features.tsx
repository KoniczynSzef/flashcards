import React from "react";
import { FeatureCard } from "./FeatureCard";
import { AnimatedSection } from "../helpers/AnimatedSection";
import { FEATURES_LIST } from "@/assets/features/features";

type Props = object & {};

export const Features: React.FC<Props> = () => {
    return (
        <AnimatedSection sectionId="features" sectionIndex={1}>
            <h2 className="text-center text-4xl font-semibold">
                LangCards is not like any other flashcard app
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
                Build with passion and focused on personalization, LangCards is
                the best way to learn a new language.
            </p>

            <ul className="my-24 grid w-full grid-cols-1 place-items-center gap-16 md:grid-cols-2 lg:grid-cols-3">
                {FEATURES_LIST.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </ul>
        </AnimatedSection>
    );
};
