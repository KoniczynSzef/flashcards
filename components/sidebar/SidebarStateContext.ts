import React from "react";

type SidebarStateContextProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarStateContext =
    React.createContext<SidebarStateContextProps>({
        isSidebarOpen: true,
        setIsSidebarOpen: () => {},
    });
