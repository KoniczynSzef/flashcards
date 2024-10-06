import { Hero } from "@/components/hero/Hero";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = object & {};

const HomePage: React.FC<Props> = async () => {
    const user = await currentUser();

    if (user && !user?.username) {
        redirect("/settings");
    }

    return (
        <>
            <Hero />
        </>
    );
};

export default HomePage;
