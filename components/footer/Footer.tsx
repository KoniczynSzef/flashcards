import React from "react";
import { Separator } from "../ui/separator";
import { Languages } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/assets/footer/footer-links";

type Props = object & {};

export const Footer: React.FC<Props> = () => {
    const date = new Date();
    return (
        <footer className="bg-black py-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-16 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <Languages
                            size={32}
                            className="rounded bg-indigo-600 p-0.5"
                        />
                        <h3 className="text-H3 font-medium">LangCards</h3>
                        <p className="paragraph text-sm">
                            Learn languages with flashcards
                        </p>

                        <p className="paragraph mt-4 text-sm">
                            Made with ❤️ by{" "}
                            <Link
                                href={"https://github.com/koniczynszef"}
                                className="text-indigo-400 transition duration-300 hover:text-indigo-300"
                            >
                                Koniczyn
                            </Link>
                        </p>
                    </div>

                    <div className="flex items-center gap-16">
                        <ul className="flex flex-col gap-4 text-sm">
                            <h4 className="mb-2 ml-4 font-semibold text-indigo-50">
                                Learn
                            </h4>

                            {FOOTER_LINKS.slice(0, 4).map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="rounded px-4 py-2 text-gray-300 transition duration-300 hover:text-gray-50 focus:outline-none focus:ring focus:ring-slate-700"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-col gap-4 text-sm">
                            <h4 className="mb-2 ml-4 font-semibold text-indigo-50">
                                Help & Support
                            </h4>

                            {FOOTER_LINKS.slice(4).map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="rounded px-4 py-2 text-gray-300 transition duration-300 hover:text-gray-50 focus:outline-none focus:ring focus:ring-slate-700"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator />

                <p className="paragraph text-sm">
                    © {date.getFullYear()} LangCards
                </p>
            </div>
        </footer>
    );
};
