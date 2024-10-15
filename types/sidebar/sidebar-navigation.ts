export type SidebarNavigationItem = {
    title: string;
    icon: React.ReactElement;
    href: string;
};

export type SidebarNavigationGroup = {
    label: string;
    items: SidebarNavigationItem[];
};

export type SidebarNavigation = {
    groups: SidebarNavigationGroup[];
};
