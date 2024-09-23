import React from "react";
import { Profile } from "../components/auth/Profile";

type Props = object & {};

const page: React.FC<Props> = async () => {
    return <Profile />;
};

export default page;
