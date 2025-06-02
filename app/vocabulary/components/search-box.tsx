"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SearchBox({ defaultValue = "", topic }: { defaultValue?: string; topic: string }) {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/vocabulary/${topic}?search=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2 mt-4 justify-center">
            <Input
                type="text"
                value={searchTerm}
                placeholder="Search word..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[300px]"
            />

            <Button type="submit" variant="default" size="default">
                Search
            </Button>
        </form>
    );
}
