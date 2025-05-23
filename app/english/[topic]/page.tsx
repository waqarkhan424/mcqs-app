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

            <div className="space-y-3 text-[16px] leading-7 text-gray-800">
                {topicData.content.map((line, idx) => (
                    <p key={idx}>• {line}</p>
                ))}
            </div>
        </div>
    );
}
