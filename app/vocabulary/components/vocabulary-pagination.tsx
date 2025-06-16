"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VocabularyPagination({
    topic,
    totalPages,
    currentPage,
    perPage,
    searchTerm,
}: {
    topic: string;
    totalPages: number;
    currentPage: number;
    perPage: number;
    searchTerm: string;
}) {
    const router = useRouter();
    const [jumpTo, setJumpTo] = useState("");

    const generatePageNumbers = () => {
        const pages: (number | "...")[] = [];
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 1);

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push("...");
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    const pagesToRender = generatePageNumbers();

    const createHref = (pageNum: number) =>
        `/vocabulary/${topic}?page=${pageNum}&perPage=${perPage}${searchTerm ? `&search=${searchTerm}` : ""
        }`;

    const handleJump = () => {
        const page = parseInt(jumpTo, 10);
        if (!isNaN(page) && page >= 1 && page <= totalPages) {
            router.push(createHref(page));
        }
    };

    return (
        <div className="space-y-4">
            <Pagination>
                <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={createHref(currentPage - 1)} />
                        </PaginationItem>
                    )}

                    {pagesToRender.map((page, index) =>
                        typeof page === "number" ? (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href={createHref(page)}
                                    isActive={currentPage === page}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    )}

                    {currentPage < totalPages && (
                        <PaginationItem>
                            <PaginationNext href={createHref(currentPage + 1)} />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>

            {/* Jump to Page with ShadCN UI */}
            <div className="flex items-center gap-2">
                <Input
                    type="number"
                    placeholder="Jump to page"
                    className="w-36"
                    value={jumpTo}
                    onChange={(e) => setJumpTo(e.target.value)}
                />
                <Button onClick={handleJump}>Go</Button>
                <span className="text-sm text-muted-foreground">
                    of {totalPages} pages
                </span>
            </div>
        </div>
    );
}
