import Typography from "@/components/ui/typography";
import { notFound } from "next/navigation";
import { grammarTopicsData } from "@/lib/grammar-topics";

interface Props {
    params: Promise<{ topic: string }>;
}

export default async function GrammarTopicPage(props: Props) {
    const { topic } = await props.params;

    const topicKey = topic.toLowerCase();
    const topicData = grammarTopicsData[topicKey];

    if (!topicData) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
            <Typography variant="h2" className="capitalize text-center">
                {topicData.title} – Complete Guide
            </Typography>

            {topicData.content}
        </div>
    );
}
