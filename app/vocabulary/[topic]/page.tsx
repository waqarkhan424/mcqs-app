import prisma from "@/lib/prisma";
import Typography from "@/components/ui/typography";
import SearchBox from "@/app/vocabulary/components/search-box";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
    params: { topic: string };
    searchParams: { page?: string; perPage?: string; search?: string };
}

export default async function VocabularyTopicPage({ params, searchParams }: Props) {
    const topic = params.topic;
    const page = parseInt(searchParams.page || "1", 10);
    const perPage = parseInt(searchParams.perPage || "10", 10);
    const skip = (page - 1) * perPage;
    const search = searchParams.search?.toLowerCase() || "";

    let whereCondition: any;

    //  1. If search is active, search globally
    if (search) {
        whereCondition = {
            word: {
                contains: search,
                mode: "insensitive"
            }
        };
    } else {
        //  2. Else, restrict to current topic
        whereCondition = { topic };
    }

    const [words, totalCount] = await Promise.all([
        prisma.vocabulary.findMany({
            where: whereCondition,
            skip,
            take: perPage
        }),
        prisma.vocabulary.count({
            where: whereCondition
        })
    ]);

    const totalPages = Math.ceil(totalCount / perPage);

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            {/*  Heading based on whether search is active */}
            {search ? (
                <Typography variant="h3" className="text-center">
                    Search results for "{search}"
                </Typography>
            ) : (
                <Typography variant="h2" className="capitalize text-center">
                    {topic.replace(/-/g, " ")} Vocabulary
                </Typography>
            )}

            {/*  Search Box */}
            <SearchBox defaultValue={searchParams.search || ""} topic={topic} />

            {/* Per Page and Range Info */}
            <div className="flex items-center justify-between">
                <Typography variant="p" className="text-muted-foreground text-sm">
                    Showing {skip + 1} – {Math.min(skip + perPage, totalCount)} of {totalCount}
                </Typography>

                <Select defaultValue={String(perPage)}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {[10, 20, 50].map((value) => (
                            <SelectItem key={value} value={String(value)}>
                                <Link href={`/vocabulary/${topic}?page=1&perPage=${value}${search ? `&search=${search}` : ""}`}>
                                    {value} / page
                                </Link>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/*  Results */}
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

            {/*  Pagination */}
            <Pagination>
                <PaginationContent>
                    {page > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={`/vocabulary/${topic}?page=${page - 1}&perPage=${perPage}${search ? `&search=${search}` : ""}`} />
                        </PaginationItem>
                    )}

                    {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                            <PaginationItem key={pageNum}>
                                <PaginationLink
                                    href={`/vocabulary/${topic}?page=${pageNum}&perPage=${perPage}${search ? `&search=${search}` : ""}`}
                                    isActive={page === pageNum}
                                >
                                    {pageNum}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {page < totalPages && (
                        <PaginationItem>
                            <PaginationNext href={`/vocabulary/${topic}?page=${page + 1}&perPage=${perPage}${search ? `&search=${search}` : ""}`} />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
}

