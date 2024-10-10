import { Languages } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = object & {};

export const LeftFooterSection: React.FC<Props> = () => {
    return (
        <div className="flex flex-col gap-2">
            <Languages size={32} className="rounded bg-indigo-600 p-0.5" />
            <h3 className="text-H3 font-medium">LangCards</h3>
            <p className="paragraph text-sm">Learn languages with flashcards</p>

            <p className="paragraph mt-4 text-sm">
                Made with ❤️ by{" "}
                <Link
                    href={"https://github.com/koniczynszef"}
                    className="text-indigo-300 transition duration-300 hover:text-indigo-200"
                >
                    Koniczyn
                </Link>
            </p>
        </div>
    );
};
