"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SiteHeader() {
    return (
        <header className="border-b bg-background shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">

                    <Image
                        src="/onepaper1.png"
                        alt="OnePaper Logo"
                        width={112}
                        height={40}
                        priority
                    />

                </Link>
                <nav>
                    <Link
                        href="/"
                        className={cn(
                            "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        )}
                    >
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
}
