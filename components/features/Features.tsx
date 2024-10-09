import { Settings } from "lucide-react";
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { AnimatedSection } from "../helpers/AnimatedSection";

type Props = object & {};
type Feature = {
    title: string;
    description: string;
    icon: React.ReactElement;
};

const features: Feature[] = [
    {
        title: "Feature 1",
        description:
            "I need a longer description for this feature to fully test the layout of the component.",
        icon: <Settings className="size-8 rounded-lg bg-blue-700 p-1" />,
    },
    {
        title: "Feature 1",
        description:
            "I need a longer description for this feature to fully test the layout of the component.",
        icon: <Settings className="size-8 rounded-lg bg-indigo-700 p-1" />,
    },
    {
        title: "Feature 1",
        description:
            "I need a longer description for this feature to fully test the layout of the component.",
        icon: <Settings className="size-8 rounded-lg bg-violet-700 p-1" />,
    },
    {
        title: "Feature 1",
        description:
            "I need a longer description for this feature to fully test the layout of the component.",
        icon: <Settings className="size-8 rounded-lg bg-purple-700 p-1" />,
    },
    {
        title: "Feature 1",
        description:
            "I need a longer description for this feature to fully test the layout of the component.",
        icon: <Settings className="size-8 rounded-lg bg-purple-700 p-1" />,
    },
    {
        title: "Feature 1",
        description:
            "I need a longer description for this feature to fully test the layout of the component.",
        icon: <Settings className="size-8 rounded-lg bg-pink-700 p-1" />,
    },
];

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

            <ul className="my-24 grid w-full grid-cols-3 place-items-center gap-16">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </ul>
        </AnimatedSection>
    );
};
