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

    return (
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
    )
}
