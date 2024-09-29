import { Hero } from "@/components/hero/Hero";
import React from "react";

type Props = object & {};

const HomePage: React.FC<Props> = () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default HomePage;
