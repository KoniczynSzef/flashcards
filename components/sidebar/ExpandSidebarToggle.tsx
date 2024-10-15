import React from "react";
import { Button } from "../ui/button";
import { SidebarStateContext } from "./SidebarStateContext";
import { ChevronsLeft } from "lucide-react";

type Props = object & {};

export const ExpandSidebarToggle: React.FC<Props> = () => {
    const { isSidebarOpen, setIsSidebarOpen } =
        React.useContext(SidebarStateContext);

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            className="absolute right-4 top-4"
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            aria-label="Clicking will toggle opening sidebar menu"
        >
            <ChevronsLeft
                className={`${isSidebarOpen ? "" : "rotate-180"} transition duration-300`}
            />
        </Button>
    );
};
