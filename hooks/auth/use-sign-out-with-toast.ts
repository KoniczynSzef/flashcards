import { SignOut } from "@clerk/types";
import { toast } from "sonner";

export function useSignOutWithToast(signOut: SignOut) {
    return () => {
        toast.promise(signOut({ redirectUrl: "/" }), {
            loading: "We're signing you out...",
            success: "Signed out successfully",
            error: "Failed to sign out",
        });
    };
}
