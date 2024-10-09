import { Feature } from "@/types/home/feature";
import { Settings, BookOpen, Globe, Star, Users, ChartBar } from "lucide-react";

export const FEATURES_LIST: Feature[] = [
    {
        title: "Efficient Learning",
        description:
            "Optimize your language learning with personalized flashcards, tailored to your vocabulary level and progress.",
        icon: <Settings className="size-8 rounded-lg bg-blue-700 p-1" />,
    },
    {
        title: "Custom Decks",
        description:
            "Create and organize custom decks to categorize words and phrases according to topics that matter to you.",
        icon: <BookOpen className="size-8 rounded-lg bg-indigo-700 p-1" />,
    },
    {
        title: "Bilingual Support",
        description:
            "Seamlessly switch between English and Polish to learn vocabulary in both languages, enhancing your understanding.",
        icon: <Globe className="size-8 rounded-lg bg-violet-700 p-1" />,
    },
    {
        title: "Gamified Progress",
        description:
            "Track your progress and earn rewards as you advance through different language proficiency levels.",
        icon: <Star className="size-8 rounded-lg bg-purple-700 p-1" />,
    },
    {
        title: "Community Sharing",
        description:
            "Share your custom decks and collaborate with other language learners to exchange vocabulary and ideas.",
        icon: <Users className="size-8 rounded-lg bg-fuchsia-700 p-1" />,
    },
    {
        title: "Detailed Analytics",
        description:
            "View insightful analytics to measure your learning habits, strengths, and areas for improvement.",
        icon: <ChartBar className="size-8 rounded-lg bg-pink-700 p-1" />,
    },
];
