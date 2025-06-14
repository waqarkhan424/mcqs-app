import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";
import { categoryTopics } from "@/lib/topics";
import slugify from "slugify";
import MCQsPagination from "@/app/components/mcqs-pagination";
import MCQsPerPageSelect from "@/app/components/mcqs-per-page-select";
import Link from "next/link";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
        <div className="px-4 pt-12 pb-20 sm:pt-16 sm:pb-28 max-w-6xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-10">
                {/* Related Topics Sidebar */}
                {originalTopics.length > 0 && (
                    <div className="lg:w-[280px] w-full">
                        <Accordion
                            type="multiple"
                            defaultValue={["related-topics"]}
                            className="w-full"
                        >
                            <AccordionItem value="related-topics">
                                <AccordionTrigger
                                    className={cn(
                                        "bg-muted text-primary w-full px-4 py-2 rounded-md font-semibold flex justify-between items-center"
                                    )}
                                >
                                    <span>Related Topics</span>
                                </AccordionTrigger>

                                <AccordionContent className="bg-white rounded-md mt-2 border border-muted px-4 py-2">
                                    <ul className="space-y-1 text-sm sm:text-base">
                                        {originalTopics.map((t) => {
                                            const topicSlug = slugify(t, { lower: true, strict: true });
                                            const isActive = topicSlug === decodedTopic;

                                            return (
                                                <li key={t}>
                                                    <Link
                                                        href={`/category/${slug}/${topicSlug}`}
                                                        className={cn(
                                                            "underline font-medium transition-colors",
                                                            isActive
                                                                ? "text-primary font-semibold"
                                                                : "text-muted-foreground hover:text-primary"
                                                        )}
                                                    >
                                                        {isActive ? `👉 ${t}` : t}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                )}

                {/* Main MCQ Content */}
                <div className="flex-1 space-y-6">
                    <Typography variant="h2" className="capitalize text-center">
                        {originalTopic || decodedTopic.replace(/-/g, " ")}
                    </Typography>

                    {questions.length === 0 ? (
                        <div className="text-center text-muted-foreground text-sm">
                            No MCQs available yet.
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between">
                                <Typography variant="p" className="text-muted-foreground text-sm">
                                    Showing {skip + 1} –{" "}
                                    {Math.min(skip + perPageNumber, totalCount)} of {totalCount}
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
            </div>
        </div>
    );
}
