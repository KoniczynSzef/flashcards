import { Hero } from "@/components/hero/Hero";
import React from "react";

type Props = object & {};

const page: React.FC<Props> = async () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default page;
