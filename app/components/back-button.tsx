"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <div className="inline-block">
            <Button
                variant="outline"
                size="sm"
                className="px-3 py-1.5"
                onClick={() => router.back()}
            >
                <ArrowLeft size={16} className="mr-2" />
                Back
            </Button>
        </div>
    );
}
