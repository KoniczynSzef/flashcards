import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

type Props = object & {
    children: React.ReactNode;
};

export const Providers: React.FC<Props> = (props) => {
    return <ClerkProvider>{props.children}</ClerkProvider>;
};
