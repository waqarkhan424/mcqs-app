import { notFound } from "next/navigation";
import Typography from "@/components/ui/typography";
import prisma from "@/lib/prisma";

interface Props {
    params: { topic: string };
}

export default async function VocabularyTopicPage({ params }: Props) {
    const { topic } = params;

    const words = await prisma.vocabulary.findMany({
        where: {
            topic: topic,
        },
    });

    if (!words || words.length === 0) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2" className="capitalize text-center">
                {topic.replace(/-/g, " ")} Vocabulary
            </Typography>

            <div className="space-y-4">
                {words.map((word) => (
                    <div key={word.id} className="p-4 border border-gray-200 rounded-md bg-white">
                        <Typography variant="h3">{word.word}</Typography>
                        <p className="text-sm text-gray-700">{word.definition}</p>
                        <p className="text-sm text-green-700">{word.urduMeaning}</p>
                        <p className="text-sm text-blue-700 italic">{word.example}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
