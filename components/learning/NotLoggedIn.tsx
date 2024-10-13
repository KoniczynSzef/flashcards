import React from "react";
import { AnimatedSection } from "../helpers/AnimatedSection";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = object & {};

export const NotLoggedIn: React.FC<Props> = () => {
    return (
        <AnimatedSection sectionId="not-logged-in" sectionIndex={0}>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold">You are not logged in</h1>
                <p className="paragraph mt-4">
                    Please log in to access this page.
                </p>

                <Link
                    href={"/sign-in"}
                    className="link__with__button my-16 focus:ring-white"
                >
                    <Button tabIndex={-1} role="link">
                        Log in
                    </Button>
                </Link>
            </div>
        </AnimatedSection>
    );
};
