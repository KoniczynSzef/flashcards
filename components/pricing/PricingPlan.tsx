"use client";

import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Link from "next/link";

type Props = object & {
    title: string;
    description: string;
    price: number;
    features: string[];
};

export const PricingPlan: React.FC<Props> = (props) => {
    const isFree = props.price === 0;

    function handleClick() {
        if (isFree) {
            toast.success("Thank you for supporting LangCards! 🎉");
        }
    }

    return (
        <Card className="flex max-w-[28rem] flex-col lg:h-[28rem] xl:h-[24rem]">
            <CardHeader>
                <CardTitle className="text-purple text-H3">
                    {props.title}
                </CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="paragraph flex flex-col gap-2">
                    {props.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <Check
                                size={16}
                                className="text-indigo-300"
                                role="presentation"
                            />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="mt-auto">
                {isFree ? (
                    <Link
                        href={"/learning"}
                        className="link__with__button mt-auto w-full focus:ring"
                    >
                        <Button className="w-full" tabIndex={-1}>
                            Start learning
                        </Button>
                    </Link>
                ) : (
                    <Button
                        className="w-full"
                        variant="outline"
                        onClick={handleClick}
                    >
                        Support us
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
