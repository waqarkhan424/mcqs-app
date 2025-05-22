
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { BookText } from "lucide-react";
import Link from "next/link";

export default function EnglishGrammarPage() {


    const grammarSections = [
        {
            title: "Basic Grammar",
            bgColor: "bg-blue-50",
            topics: [
                { name: "Nouns", color: "text-blue-600" },
                { name: "Pronouns", color: "text-green-600" },
                { name: "Verbs", color: "text-red-600" },
                { name: "Adjectives", color: "text-purple-600" },
                { name: "Adverbs", color: "text-yellow-600" },
                { name: "Prepositions", color: "text-cyan-600" },
                { name: "Conjunctions", color: "text-indigo-600" },
                { name: "Interjections", color: "text-pink-600" },
                { name: "Articles", color: "text-orange-600" },
            ],
        },
        {
            title: "Intermediate Grammar",
            bgColor: "bg-green-50",
            topics: [
                { name: "Tenses", color: "text-emerald-600" },
                { name: "Active and Passive Voice", color: "text-teal-600" },
                { name: "Direct and Indirect Speech", color: "text-rose-600" },
                { name: "Sentence Structure", color: "text-lime-600" },
                { name: "Subject-Verb Agreement", color: "text-sky-600" },
                { name: "Modals", color: "text-violet-600" },
                { name: "Conditionals", color: "text-fuchsia-600" },
            ],
        },
        {
            title: "Advanced Grammar",
            bgColor: "bg-purple-50",
            topics: [
                { name: "Gerunds and Infinitives", color: "text-purple-700" },
                { name: "Clauses", color: "text-pink-700" },
                { name: "Phrases", color: "text-indigo-700" },
                { name: "Reported Speech", color: "text-green-700" },
                { name: "Parallelism", color: "text-orange-700" },
                { name: "Inversion", color: "text-blue-700" },
                { name: "Emphasis and Cleft Sentences", color: "text-red-700" },
            ],
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
            <div className="text-center space-y-2">
                <Typography variant="h2">Learn English Grammar</Typography>
                <Typography variant="p" className="text-muted-foreground">
                    This guide will help you learn English grammar from basics to advanced. Click on a topic to explore and master each concept.
                </Typography>
            </div>

            {grammarSections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                    <Typography variant="h3" className="text-center">{section.title}</Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {section.topics.map((topic) => (
                            <Card key={topic.name} className={`${section.bgColor} transition rounded-xl border-none shadow-sm`}>
                                <CardContent className="p-5">
                                    <Link
                                        href={`/english/${topic.name}`}
                                        className="flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2"
                                    >
                                        <BookText className={`w-5 h-5 ${topic.color}`} />
                                        {topic.name}
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}



        </div>
    );
}
