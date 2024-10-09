import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";
import { Profile, ProfileWrapper } from "./Profile";

type Props = object & {};

export const LoadedAuthState: React.FC<Props> = () => {
    return (
        <ClerkLoaded>
            <ProfileWrapper>
                <Profile />
            </ProfileWrapper>
        </ClerkLoaded>
    );
};
