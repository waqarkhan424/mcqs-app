
import Typography from "@/components/ui/typography";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import Link from "next/link";

interface Props {
    params: Promise<{ topic: string }>;
    searchParams?: { page?: string };
}

export default async function VocabularyTopicPage({ params, searchParams }: Props) {
    const { topic } = await params;

    const currentPage = parseInt(searchParams?.page || "1", 10);
    const perPage = 10;
    const skip = (currentPage - 1) * perPage;

    // Get current page words + total count
    const [words, totalCount] = await Promise.all([
        prisma.vocabulary.findMany({
            where: { topic },
            skip,
            take: perPage,
            orderBy: { word: "asc" },
        }),
        prisma.vocabulary.count({ where: { topic } }),
    ]);

    if (!words || words.length === 0) return notFound();

    const totalPages = Math.ceil(totalCount / perPage);

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
            <Typography variant="h2" className="capitalize text-center">
                {topic.replace(/-/g, " ")} Vocabulary
            </Typography>

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

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <Link
                            key={pageNum}
                            href={`/vocabulary/${topic}?page=${pageNum}`}
                            className={`px-4 py-2 rounded border ${pageNum === currentPage
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600 border-blue-600"
                                }`}
                        >
                            {pageNum}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
