import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import React from "react";
import { Profile, ProfileWrapper } from "./Profile";

type Props = object & {};

export const AuthWrapper: React.FC<Props> = () => {
    return (
        <>
            <ClerkLoading>
                <p>Authentication loading...</p>
            </ClerkLoading>

            <ClerkLoaded>
                <ProfileWrapper>
                    <Profile />
                </ProfileWrapper>
            </ClerkLoaded>
        </>
    );
};
