import { Loader2 } from "lucide-react";
import React from "react";

type Props = object & {};

export const CustomLoader: React.FC<Props> = () => {
    return <Loader2 className="animate-spin" />;
};
