import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = object & {};

export const AuthLinks: React.FC<Props> = () => {
    return (
        <>
            <Link href="/sign-up" className="link__with__button ring-slate-600">
                <Button role="link" tabIndex={-1} variant={"outline"}>
                    Sign up
                </Button>
            </Link>

            <Link href="/sign-in" className="link__with__button ring-white">
                <Button role="link" tabIndex={-1}>
                    Sign in
                </Button>
            </Link>
        </>
    );
};
