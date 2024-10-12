import React from "react";
import { Separator } from "../ui/separator";
import { FOOTER_LINKS } from "@/assets/footer/footer-links";
import { LeftFooterSection } from "./LeftFooterSection";
import { FooterNavigationList } from "./FooterNavigationList";

type Props = object & {};

export const Footer: React.FC<Props> = () => {
    const date = new Date();
    return (
        <footer className="bg-black py-8">
            <div className="mx-8 flex max-w-7xl flex-col gap-16 p-4 lg:mx-auto">
                <div className="flex flex-col items-start justify-between gap-16 md:flex-row md:items-center">
                    <LeftFooterSection />

                    <div className="flex items-center gap-16">
                        <FooterNavigationList
                            listTitle="Learn with LangCards"
                            links={FOOTER_LINKS.slice(0, 4)}
                        />

                        <FooterNavigationList
                            listTitle="Help & Support"
                            links={FOOTER_LINKS.slice(4)}
                        />
                    </div>
                </div>

                <Separator />

                <p className="paragraph text-sm">
                    © {date.getFullYear()} LangCards. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
