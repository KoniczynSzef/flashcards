import React from "react";
import { Client } from "./Client";
import { currentUser } from "@clerk/nextjs/server";
import { Unauthenticated } from "../components/client/Unauthenticated";
import { Authenticated } from "../components/client/Authenticated";

type Props = object & {};

const page: React.FC<Props> = async () => {
    const user = await currentUser();

    if (!user) {
        return (
            <div className="p-24">
                <Unauthenticated />
            </div>
        );
    }

    return (
        <div className="p-24">
            <Client />
            <Authenticated />
        </div>
    );
};

export default page;
