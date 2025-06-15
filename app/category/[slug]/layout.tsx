"use client";

import { usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";

export default function CategoryLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Split "/category/english"  → ["", "category", "english"]
        //      "/category/english/foo" → ["", "category", "english", "foo"]
        const segments = pathname.split("/").filter(Boolean);

        // When on the category index (exactly 2 segments: ["category","english"]),
        // clear the accordion-open flag so that the next topic page starts closed.
        if (segments.length === 2) {
            localStorage.removeItem("related-topics-open");
        }
    }, [pathname]);

    return <>{children}</>;
}
