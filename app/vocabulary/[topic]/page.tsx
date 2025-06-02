import prisma from "@/lib/prisma";
import Typography from "@/components/ui/typography";
import SearchBox from "@/app/vocabulary/components/search-box";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { vocabularyTopics } from "@/lib/vocabulary-topics";
import { Prisma } from "@prisma/client";

interface Props {
    params: Promise<{ topic: string }>;
    searchParams: Promise<{ page?: string; perPage?: string; search?: string; }>;
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
            <aside className="space-y-4">
                <Typography variant="h4">All Topics</Typography>
                <ul className="space-y-1">
                    {vocabularyTopics.map((t) => (
                        <li key={t.slug}>
                            <Link
                                href={`/vocabulary/${t.slug}`}
                                className={`block px-3 py-1.5 rounded-md font-medium hover:bg-muted transition ${topic === t.slug ? "bg-primary text-white" : "text-blue-600"
                                    }`}
                            >
                                {t.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="space-y-6">
                {searchTerm ? (
                    <Typography variant="h3" className="text-center">
                        Search results for "{searchTerm}"
                    </Typography>
                ) : (
                    <Typography variant="h2" className="capitalize text-center">
                        {topic.replace(/-/g, " ")} Vocabulary
                    </Typography>
                )}

                <SearchBox defaultValue={searchTerm} topic={topic} />

                <div className="flex items-center justify-between">
                    <Typography variant="p" className="text-muted-foreground text-sm">
                        Showing {skip + 1} – {Math.min(skip + perPageNumber, totalCount)} of {totalCount}
                    </Typography>

                    <Select defaultValue={String(perPageNumber)}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 20, 50].map((value) => (
                                <SelectItem key={value} value={String(value)}>
                                    <Link
                                        href={`/vocabulary/${topic}?page=1&perPage=${value}${searchTerm ? `&search=${searchTerm}` : ""}`}
                                    >
                                        {value} / page
                                    </Link>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {words.length === 0 ? (
                    <div className="text-center py-10">
                        <Typography variant="h3">No results found.</Typography>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {words.map((word) => (
                            <Card key={word.id}>
                                <CardHeader className="pb-0">
                                    <CardTitle className="text-xl">{word.word}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 pt-0">
                                    <p className="text-lg text-gray-700">{word.definition}</p>
                                    <p className="text-lg text-green-700">{word.urduMeaning}</p>
                                    <p className="text-lg text-blue-700 italic">{word.example}</p>



                                    {/* <Typography variant="p" size="lg" color="muted-foreground">
                                    {word.definition}
                                </Typography>
                                <Typography variant="p" size="lg" color="success">
                                    {word.urduMeaning}
                                </Typography>
                                <Typography variant="p" size="lg" color="primary" className="italic">
                                    {word.example}
                                </Typography> */}



                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                <Pagination>
                    <PaginationContent>
                        {pageNumber > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    href={`/vocabulary/${topic}?page=${pageNumber - 1}&perPage=${perPageNumber}${searchTerm ? `&search=${searchTerm}` : ""
                                        }`}
                                />
                            </PaginationItem>
                        )}

                        {[...Array(totalPages)].map((_, i) => {
                            const pageNum = i + 1;
                            return (
                                <PaginationItem key={pageNum}>
                                    <PaginationLink
                                        href={`/vocabulary/${topic}?page=${pageNum}&perPage=${perPageNumber}${searchTerm ? `&search=${searchTerm}` : ""
                                            }`}
                                        isActive={pageNumber === pageNum}
                                    >
                                        {pageNum}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {pageNumber < totalPages && (
                            <PaginationItem>
                                <PaginationNext
                                    href={`/vocabulary/${topic}?page=${pageNumber + 1}&perPage=${perPageNumber}${searchTerm ? `&search=${searchTerm}` : ""
                                        }`}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            </main>
        </div>
    );
}
