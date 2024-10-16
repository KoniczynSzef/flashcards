import { Languages } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = object & {};

export const LeftFooterSection: React.FC<Props> = () => {
    return (
        <div className="md:ml- ml-4 flex flex-col gap-2">
            <Languages size={32} className="rounded bg-indigo-600 p-0.5" />
            <h3 className="text-H3 font-medium">LangCards</h3>
            <p className="paragraph text-sm">Learn languages with flashcards</p>

            <p className="paragraph mt-4 text-sm">
                Made with ❤️ by{" "}
                <Link
                    href={"https://github.com/koniczynszef"}
                    className="rounded text-indigo-300 transition-all duration-300 hover:text-indigo-200 focus:px-4 focus:py-2 focus:outline-none focus:ring"
                >
                    Koniczyn
                </Link>
            </p>
        </div>
    );
};
