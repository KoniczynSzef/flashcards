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
import { Button } from "../ui/button";
import { useAppAuthStore } from "@/store/auth/app-auth-store";
import { updateUser as updateUserAction } from "@/api/user/update-user";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import RotatingLoader from "../loading/RotatingLoader";
import { useRouter } from "next/navigation";

type Props = object & React.HTMLAttributes<HTMLFormElement> & {};

export const ProfileForm: React.FC<Props> = (props) => {
    const router = useRouter();
    const { executeAsync: updateUser, isPending } = useAction(updateUserAction);

    const { clerkUser, user } = useAppAuthStore();

    const form = useForm<ProfileFormSchema>({
        defaultValues: {
            username: user?.username || "",
            bioDescription: user?.bioDescription || "",
            email: "",
        },

        mode: "onBlur",
        resolver: zodResolver(profileFormSchema),
    });

    React.useEffect(() => {
        if (clerkUser?.primaryEmailAddress?.emailAddress) {
            form.setValue("email", clerkUser.primaryEmailAddress.emailAddress);
        }

        if (user?.username) {
            form.setValue("username", user.username);
        }

        if (user?.bioDescription) {
            form.setValue("bioDescription", user.bioDescription);
        }
    }, [clerkUser, form, user]);

    async function handleSubmitForm(data: ProfileFormSchema) {
        try {
            await updateUser(data);
            toast.success("Profile updated successfully");

            await new Promise((resolve) => setTimeout(resolve, 200));
            router.push("/");
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }

            toast.error("Error updating profile");
        }
    }

    return (
        <Form {...form}>
            <form
                className={cn(props.className, "flex max-w-2xl flex-col gap-8")}
                onSubmit={form.handleSubmit(handleSubmitForm)}
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

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. johndoe@gmail.com"
                                    {...field}
                                    required
                                    type="email"
                                />
                            </FormControl>
                            <FormDescription>
                                Your email address will be used to send you
                                notifications about your account and activity on
                                LangCards.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">
                    {isPending ? (
                        <RotatingLoader
                            containerClassName="size-6"
                            dotClassName="size-2"
                        />
                    ) : (
                        "Update Profile"
                    )}
                </Button>
            </form>
        </Form>
    );
};
