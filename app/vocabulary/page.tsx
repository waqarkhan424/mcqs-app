import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import Link from "next/link";

const topics = [
    "Essential Words",
    "All Words",
    "Information Tech",
    "Business",
    "Computers",
    "Office",
    "Networking",
    "Interviewing",
];

export default function VocabularyPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2" className="text-center">Vocabulary Topics</Typography>
            <Typography className="text-muted-foreground text-center">Click a topic to explore related words with English and Urdu meanings.</Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {topics.map((topic) => (
                    <Card key={topic} className="bg-yellow-50 transition rounded-xl border-none shadow-sm">
                        <CardContent className="p-5">
                            <Link
                                href={`/vocabulary/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                                className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2"
                            >
                                {topic}
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
