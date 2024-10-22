import { SignOutButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { useSignOutWithToast } from "@/hooks/auth/use-sign-out-with-toast";
import { SignOutOptions } from "@clerk/types";

type Props = object & {
    signOutOptions?: SignOutOptions;
};

export const SignOut: React.FC<Props> = (props) => {
    const signOutWithToast = useSignOutWithToast(props.signOutOptions);

    return (
        <SignOutButton>
            <Button variant={"destructive"} onClick={signOutWithToast}>
                Sign Out
            </Button>
        </SignOutButton>
    );
};
