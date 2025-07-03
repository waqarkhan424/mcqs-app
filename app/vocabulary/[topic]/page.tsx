import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Typography from "@/components/ui/typography";
import SearchBox from "../components/search-box";
import VocabularySidebar from "../components/vocabulary-sidebar";
import VocabularyHeader from "../components/vocabulary-header";
import VocabularyCard from "../components/vocabulary-card";
import VocabularyPagination from "../components/vocabulary-pagination";
import VocabularyPerPageSelect from "../components/vocabulary-per-page-select";

interface Props {
    params: Promise<{ topic: string }>;
    searchParams: Promise<{ page?: string; perPage?: string; search?: string }>;
}

export default async function VocabularyTopicPage({ params, searchParams }: Props) {
    const { topic } = await params;
    const { page = "1", perPage = "10", search = "" } = await searchParams;

    const pageNumber = parseInt(page, 10);
    const perPageNumber = parseInt(perPage, 10);
    const skip = (pageNumber - 1) * perPageNumber;

    const searchTerm = search.toLowerCase();

    const whereCondition =
        searchTerm.length > 0
            ? {
                word: {
                    contains: searchTerm,
                    mode: Prisma.QueryMode.insensitive,
                    // mode: "insensitive",
                },
            }
            : { topic };

    const [words, totalCount] = await Promise.all([
        prisma.vocabulary.findMany({
            where: whereCondition,
            skip,
            take: perPageNumber,
        }),
        prisma.vocabulary.count({
            where: whereCondition,
        }),
    ]);

    const totalPages = Math.ceil(totalCount / perPageNumber);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
            {/* Sidebar */}
            <VocabularySidebar activeTopic={topic} />

            {/* Main Content */}
            <main className="space-y-6">
                <VocabularyHeader searchTerm={searchTerm} topic={topic} />

                <SearchBox defaultValue={searchTerm} topic={topic} />

                <div className="flex items-center justify-between">
                    <Typography variant="p" className="text-muted-foreground text-sm">
                        Showing {(skip + 1).toLocaleString()} – {Math.min(skip + perPageNumber, totalCount).toLocaleString()} of {totalCount.toLocaleString()}
                    </Typography>

                    <VocabularyPerPageSelect
                        topic={topic}
                        currentPerPage={perPageNumber}
                        searchTerm={searchTerm}
                    />
                </div>

                {words.length === 0 ? (
                    <div className="text-center py-10">
                        <Typography variant="h3" className="text-muted-foreground">No results found.</Typography>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {words.map((word) => (
                            <VocabularyCard key={word.id} word={word} />
                        ))}
                    </div>
                )}

                <VocabularyPagination
                    topic={topic}
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    perPage={perPageNumber}
                    searchTerm={searchTerm}
                />
            </main>
        </div>
    );
}
