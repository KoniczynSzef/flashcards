import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import React from "react";
import { Profile, ProfileWrapper } from "./Profile";
import { DottedLoadingIndicator } from "../loading/DottedLoadingIndicator";

type Props = object & {};

export const AuthenticationState: React.FC<Props> = () => {
    return (
        <div className="auth-wrapper">
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
