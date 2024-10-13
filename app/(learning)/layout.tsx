import { Sidebar } from "@/components/sidebar/Sidebar";
import React from "react";

type Props = object & {
    children: React.ReactNode;
};

const layout: React.FC<Props> = (props) => {
    return (
        <div className="flex items-start">
            <Sidebar />

            <div className="mx-auto max-w-7xl bg-green-600 p-24">
                {props.children}
            </div>
        </div>
    );
};

export default layout;
