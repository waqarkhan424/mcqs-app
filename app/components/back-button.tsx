"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();

    const handleBack = () => {
        const segments = pathname.split("/").filter(Boolean);

        // If already at root, do nothing
        if (segments.length === 0) return;

        // Remove the last segment to go up one level
        const newSegments = segments.slice(0, -1);
        const newPath = "/" + newSegments.join("/");

        // If new path would be /category (which doesn’t exist), go to /
        if (newPath === "/category") {
            router.push("/");
        } else {
            router.push(newPath || "/");
        }
    };

    return (
        <div className="inline-block">
            <Button
                variant="outline"
                size="sm"
                className="px-3 py-1.5"
                onClick={handleBack}
            >
                <ArrowLeft size={16} className="mr-2" />
                Back
            </Button>
        </div>
    );
}
