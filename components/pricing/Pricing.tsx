import React from "react";
import { AnimatedSection } from "../helpers/AnimatedSection";
import { PricingPlan } from "./PricingPlan";

type Props = object & {};

const pricingPlans = [
    {
        title: "Free Forever",
        description:
            "Enjoy full access to all features of LangCards at no cost. Learn languages efficiently and deeply, completely free!",
        price: 0,
        features: [
            "Unlimited custom flashcards and decks",
            "Bilingual support (English & Polish)",
            "Personalized learning and progress tracking",
            "No ads, no hidden fees",
            "Open-source and fully transparent",
        ],
    },
    {
        title: "Support LangCards",
        description:
            "LangCards is free and open-source. If you enjoy using it and want to help developing it, consider making a donation.",
        price: 5,
        features: [
            "Full access to all features (same as Free Tier)",
            "Support the development and future features",
            "Help keep the platform ad-free",
            "Join our list of supporters (optional)",
            "Priority support and feature requests",
        ],
    },
];

export const Pricing: React.FC<Props> = () => {
    return (
        <AnimatedSection sectionId="pricing" sectionIndex={2}>
            <h2 className="text-H2">Choose the plan that fits your needs</h2>
            <p className="paragraph mt-4 text-center">
                Start learning with LangCards today and choose the best option
                for yourself.
            </p>

            <div className="my-24 flex w-full flex-col items-center justify-around gap-16 lg:flex-row">
                {pricingPlans.map((plan, index) => (
                    <PricingPlan key={index} {...plan} />
                ))}
            </div>
        </AnimatedSection>
    );
};
