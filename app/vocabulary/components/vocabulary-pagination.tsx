import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
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
    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious href={`/vocabulary/${topic}?page=${currentPage - 1}&perPage=${perPage}${searchTerm ? `&search=${searchTerm}` : ""}`} />
                    </PaginationItem>
                )}
                {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                        <PaginationItem key={pageNum}>
                            <PaginationLink
                                href={`/vocabulary/${topic}?page=${pageNum}&perPage=${perPage}${searchTerm ? `&search=${searchTerm}` : ""}`}
                                isActive={currentPage === pageNum}
                            >
                                {pageNum}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationNext href={`/vocabulary/${topic}?page=${currentPage + 1}&perPage=${perPage}${searchTerm ? `&search=${searchTerm}` : ""}`} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}
