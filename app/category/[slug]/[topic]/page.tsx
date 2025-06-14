
import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";
import { categoryTopics } from "@/lib/topics";
import slugify from "slugify";
import MCQsPagination from "@/app/components/mcqs-pagination";
import MCQsPerPageSelect from "@/app/components/mcqs-per-page-select";

interface Props {
    params: Promise<{ slug: string; topic: string }>;
    searchParams: Promise<{ page?: string; perPage?: string }>;
}

export default async function McqsByTopic({ params, searchParams }: Props) {
    const { slug, topic } = await params;
    const { page = "1", perPage = "10" } = await searchParams;

    const pageNumber = parseInt(page, 10);
    const perPageNumber = parseInt(perPage, 10);
    const skip = (pageNumber - 1) * perPageNumber;

    const decodedTopic = decodeURIComponent(topic);
    const originalTopics = categoryTopics[slug] || [];
    const originalTopic = originalTopics.find(
        (t) => slugify(t, { lower: true, strict: true }) === decodedTopic
    );

    const [questions, totalCount] = await Promise.all([
        prisma.question.findMany({
            where: {
                category: slug,
                topic: decodedTopic,
            },
            skip,
            take: perPageNumber,
        }),
        prisma.question.count({
            where: {
                category: slug,
                topic: decodedTopic,
            },
        }),
    ]);

    const totalPages = Math.ceil(totalCount / perPageNumber);

    return (
        <div className="px-4 pt-12 pb-20 sm:pt-16 sm:pb-28 max-w-5xl mx-auto space-y-6">
            <Typography variant="h2" className="capitalize text-center">
                {originalTopic || decodedTopic.replace(/-/g, " ")}
            </Typography>

            {questions.length === 0 ? (
                <div className="text-center text-muted-foreground text-sm">No MCQs available yet.</div>
            ) : (
                <>
                    <div className="flex items-center justify-between">
                        <Typography variant="p" className="text-muted-foreground text-sm">
                            Showing {skip + 1} – {Math.min(skip + perPageNumber, totalCount)} of {totalCount}
                        </Typography>

                        <MCQsPerPageSelect
                            slug={slug}
                            topic={topic}
                            currentPerPage={perPageNumber}
                        />
                    </div>

                    <EditDeleteMcqsList questions={questions} enableDelete={false} />

                    <MCQsPagination
                        slug={slug}
                        topic={topic}
                        totalPages={totalPages}
                        currentPage={pageNumber}
                        perPage={perPageNumber}
                    />
                </>
            )}
        </div>
    );
}
