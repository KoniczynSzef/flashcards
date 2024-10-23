import { ProfileForm } from "@/components/auth/ProfileForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = object & {};

const page: React.FC<Props> = () => {
    return (
        <div>
            <h3 className="py-1 text-2xl font-semibold">Settings</h3>
            <Separator className="my-4" />
            <ProfileForm className="my-8" />
        </div>
    );
};

export default page;
