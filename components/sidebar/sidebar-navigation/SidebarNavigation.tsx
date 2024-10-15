import { SIDEBAR_NAVIGATION } from "@/assets/sidebar/sidebar-navigation";
import React from "react";
import { SidebarNavigationLink } from "./SidebarNavigationLink";

type Props = object & {};

export const SidebarNavigation: React.FC<Props> = () => {
    return (
        <nav className="flex w-full flex-col items-center gap-8">
            {SIDEBAR_NAVIGATION.groups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full">
                    <span className="mb-4 ml-4 font-semibold text-muted-foreground">
                        {group.label}
                    </span>

                    <div className="mt-4 flex flex-col gap-1">
                        {group.items.map((item, itemIndex) => (
                            <SidebarNavigationLink
                                key={itemIndex}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    );
};
