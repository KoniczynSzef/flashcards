import { SidebarNavigation } from "@/types/sidebar/sidebar-navigation";
import {
    PlusCircle,
    Layers,
    FolderOpen,
    PlayCircle,
    Redo,
    User,
    LifeBuoy,
    Mail,
    BarChart,
    Languages,
} from "lucide-react";

export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    groups: [
        {
            label: "Flashcards",
            items: [
                {
                    title: "Create Deck",
                    icon: <PlusCircle className="size-6" />,
                    href: "/create-deck",
                },
                {
                    title: "Manage Decks",
                    icon: <Layers className="size-6" />,
                    href: "/manage-decks",
                },
                {
                    title: "Browse Flashcards",
                    icon: <FolderOpen className="size-6" />,
                    href: "/browse-flashcards",
                },
                {
                    title: "Learning Progress",
                    icon: <BarChart className="size-6" />,
                    href: "/learning-progress",
                },
            ],
        },
        {
            label: "Learning",
            items: [
                {
                    title: "Start Learning",
                    icon: <PlayCircle className="size-6" />,
                    href: "/start-learning",
                },
                {
                    title: "Review Flashcards",
                    icon: <Redo className="size-6" />,
                    href: "/review-flashcards",
                },
            ],
        },
        {
            label: "Settings",
            items: [
                {
                    title: "Profile",
                    icon: <User className="size-6" />,
                    href: "/profile",
                },
                {
                    title: "Language Preferences",
                    icon: <Languages className="size-6" />,
                    href: "/language-preferences",
                },
            ],
        },
        {
            label: "Support",
            items: [
                {
                    title: "Help Center",
                    icon: <LifeBuoy className="size-6" />,
                    href: "/help-center",
                },
                {
                    title: "Contact Support",
                    icon: <Mail className="size-6" />,
                    href: "/contact-support",
                },
            ],
        },
    ],
};
