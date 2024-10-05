"use client";

import React from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import {
    profileFormSchema,
    ProfileFormSchema,
} from "@/schema/profile-form/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type Props = object & React.HTMLAttributes<HTMLFormElement> & {};

export const ProfileForm: React.FC<Props> = (props) => {
    const form = useForm<ProfileFormSchema>({
        defaultValues: {
            username: "",
            bioDescription: "",
            email: "",
        },

        mode: "onBlur",
        resolver: zodResolver(profileFormSchema),
    });

    return (
        <Form {...form}>
            <form
                action=""
                className={cn(props.className, "flex max-w-2xl flex-col gap-8")}
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. John Doe"
                                    {...field}
                                    required
                                />
                            </FormControl>
                            <FormDescription>
                                Your username will appear next to your flascards
                                and decks. You can change it later.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bioDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a bit about yourself"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Sharing your learning experience can create
                                opportunities for collaborative work and inspire
                                others to stay committed to their studies.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};
