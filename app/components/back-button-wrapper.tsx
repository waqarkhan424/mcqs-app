"use client";

import { usePathname } from "next/navigation";
import BackButton from "./back-button";

export default function BackButtonWrapper() {
    const pathname = usePathname();
    const showBackButton = pathname !== "/";

    if (!showBackButton) return null;

    return (
        <div className="px-4 pt-4">
            <BackButton />
        </div>
    );
}
