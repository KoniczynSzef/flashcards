import React from "react";
import { Client } from "./Client";
import { auth } from "@clerk/nextjs/server";

type Props = object & {};

const page: React.FC<Props> = () => {
    const { userId } = auth();

    if (!userId) {
        return <div className="p-24">You are not logged in</div>;
    }

    return (
        <div className="p-24">
            <Client />
        </div>
    );
};

export default page;
