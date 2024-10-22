import { useClerk } from "@clerk/nextjs";
import { SignOutOptions } from "@clerk/types";
import { toast } from "sonner";

export function useSignOutWithToast(options?: SignOutOptions) {
    const { signOut } = useClerk();

    return () => {
        toast.promise(signOut(options), {
            loading: "We're signing you out...",
            success: "Signed out successfully",
            error: "Failed to sign out",
        });
    };
}
