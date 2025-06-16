"use client"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function MCQsPagination({
    slug,
    topic,
    totalPages,
    currentPage,
    perPage,
}: {
    slug: string
    topic: string
    totalPages: number
    currentPage: number
    perPage: number
}) {
    const router = useRouter()
    const [jumpTo, setJumpTo] = useState("")

    const generatePages = () => {
        const pages: (number | "...")[] = []
        const start = Math.max(1, currentPage - 1)
        const end = Math.min(totalPages, currentPage + 1)

        if (start > 1) {
            pages.push(1)
            if (start > 2) pages.push("...")
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        if (end < totalPages) {
            if (end < totalPages - 1) pages.push("...")
            pages.push(totalPages)
        }

        return pages
    }

    const pages = generatePages()
    const baseHref = `/category/${slug}/${topic}`

    const handleJump = () => {
        const page = parseInt(jumpTo, 10)
        if (!isNaN(page) && page >= 1 && page <= totalPages) {
            router.push(`${baseHref}?page=${page}&perPage=${perPage}`)
        }
    }

    return (
        <div className="space-y-4">
            <Pagination>
                <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={`${baseHref}?page=${currentPage - 1}&perPage=${perPage}`} />
                        </PaginationItem>
                    )}

                    {pages.map((pg, i) =>
                        typeof pg === "number" ? (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href={`${baseHref}?page=${pg}&perPage=${perPage}`}
                                    isActive={pg === currentPage}
                                >
                                    {pg}
                                </PaginationLink>
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={i}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    )}

                    {currentPage < totalPages && (
                        <PaginationItem>
                            <PaginationNext href={`${baseHref}?page=${currentPage + 1}&perPage=${perPage}`} />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>

            {/* Jump to Page Input */}
            <div className="flex items-center gap-2">
                <Input
                    type="number"
                    placeholder="Jump to page"
                    className="w-36"
                    value={jumpTo}
                    onChange={(e) => setJumpTo(e.target.value)}
                />
                <Button onClick={handleJump}>Go</Button>
                <span className="text-sm text-muted-foreground">of {totalPages} pages</span>
            </div>
        </div>
    )
}
