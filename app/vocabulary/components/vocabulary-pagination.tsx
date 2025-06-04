import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";

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

    return (
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
    );
}
