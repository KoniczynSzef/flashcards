import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import React from "react";
import { Profile, ProfileWrapper } from "./Profile";
import { DottedLoadingIndicator } from "../loading/DottedLoadingIndicator";
import { cn } from "../../lib/utils";

type Props = object & React.HTMLProps<HTMLDivElement> & {};

export const AuthenticationState: React.FC<Props> = (props) => {
    return (
        <div className={cn("auth-wrapper", props.className)}>
            <ClerkLoading>
                <DottedLoadingIndicator />
            </ClerkLoading>

            <ClerkLoaded>
                <ProfileWrapper>
                    <Profile />
                </ProfileWrapper>
            </ClerkLoaded>
        </div>
    );
};
