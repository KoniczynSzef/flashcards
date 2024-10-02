import { Hero } from "@/components/hero/Hero";
import { db } from "@/database";
import React from "react";

type Props = object & {};

const HomePage: React.FC<Props> = async () => {
    const flashcards = await db.query.flashcards.findMany();

    console.log(flashcards);

    return (
        <>
            <Hero />
        </>
    );
};

export default HomePage;
