import Typography from "@/components/ui/typography";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

interface Props {
    params: Promise<{ topic: string }>;
}

export default async function VocabularyTopicPage(props: Props) {
    const { topic } = await props.params;

    const words = await prisma.vocabulary.findMany({
        where: {
            topic,
        },
    });

    if (!words || words.length === 0) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
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
                            <Typography variant="p" size="md" color="muted-foreground">
                                {word.definition}
                            </Typography>
                            <Typography variant="p" size="md" color="success">
                                {word.urduMeaning}
                            </Typography>
                            <Typography variant="p" size="md" color="primary" className="italic">
                                {word.example}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
