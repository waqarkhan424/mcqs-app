import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { vocabularyTopics } from "@/lib/vocabulary-topics";
import Link from "next/link";

import prisma from "@/lib/prisma";


export default async function VocabularyPage() {

    // Fetch word count for each topic
    const topicsWithCount = await Promise.all(
        vocabularyTopics.map(async (topic) => {
            const count = await prisma.vocabulary.count({
                where: { topic: topic.slug },
            });
            return { ...topic, count };
        })
    );


    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
            <div className="text-center space-y-2">
                <Typography variant="h2">Vocabulary Topics</Typography>
                <Typography variant="p" className="text-muted-foreground">
                    Click a topic to explore English and Urdu meanings with examples.
                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {topicsWithCount.map(({ name, slug, icon: Icon, color, count }) => (
                    <Card key={slug}
                        // className="bg-blue-50 transition rounded-xl border-none shadow-sm"
                        className="bg-muted transition rounded-xl border border-border shadow-sm"


                    >
                        <CardContent className="p-5 space-y-1">
                            <Link
                                href={`/vocabulary/${slug}`}
                                // className="flex items-center gap-3 font-medium text-blue-700 underline underline-offset-2"
                                className="flex items-center gap-3 font-medium text-primary underline underline-offset-2 hover:text-primary/90"

                            >
                                <Icon className={`w-5 h-5 ${color}`} />
                                {name}
                            </Link>
                            <Typography variant="p" className="text-sm text-muted-foreground">
                                {count} word{count !== 1 ? "s" : ""}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
