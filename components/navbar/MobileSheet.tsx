import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { LinksNavigation } from "./LinksNavigation";
import { AuthenticationState } from "../auth/AuthenticationState";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Props = object & {};

export const MobileSheet: React.FC<Props> = () => {
    return (
        <div className="block lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={"icon"}>
                        <Menu />
                    </Button>
                </SheetTrigger>

                <SheetContent className="mx-auto flex flex-col gap-24 bg-black py-16">
                    <LinksNavigation className="flex flex-col" />
                    <AuthenticationState />
                </SheetContent>
            </Sheet>
        </div>
    );
};
