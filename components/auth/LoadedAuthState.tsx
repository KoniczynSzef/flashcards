import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";
import { Profile } from "./profile/Profile";
import { ProfileWrapper } from "./profile/ProfileWrapper";

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
