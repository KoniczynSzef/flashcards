import React from "react";

type MobileSheetContextProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileSheetContext = React.createContext<MobileSheetContextProps>({
    isOpen: false,
    setIsOpen: () => {},
});
