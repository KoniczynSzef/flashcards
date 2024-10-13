"use client";

import { useAppAuthStore } from "@/store/auth/app-auth-store";
import React from "react";

type Props = object & {};

export const Sidebar: React.FC<Props> = () => {
    const { user } = useAppAuthStore();

    // if (!user) {
    //     return (
    //         <div>
    //             <p>Loading...</p>
    //         </div>
    //     );
    // }

    return (
        <aside className="h-screen w-80 bg-black px-8 py-24">
            <pre>{user?.username}</pre>
        </aside>
    );
};
