import React from "react";
import { Client } from "./Client";

type Props = object & {};

const page: React.FC<Props> = () => {
    return (
        <div className="p-24">
            <Client />
        </div>
    );
};

export default page;
