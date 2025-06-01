import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import Link from "next/link";

import {
    BookOpen,
    FileText,
    Monitor,
    Briefcase,
    Brain,
    Users,
    Network,
    MessageCircle,
} from "lucide-react";




const vocabularyTopics = [
    { name: "Essential Words", slug: "essential-words", icon: BookOpen, color: "text-purple-600" },
    { name: "All Words", slug: "all-words", icon: FileText, color: "text-teal-600" },
    { name: "Information Tech", slug: "information-tech", icon: Monitor, color: "text-blue-600" },
    { name: "Business", slug: "business", icon: Briefcase, color: "text-green-600" },
    { name: "Computers", slug: "computers", icon: Brain, color: "text-orange-600" },
    { name: "Office", slug: "office", icon: Users, color: "text-yellow-600" },
    { name: "Networking", slug: "networking", icon: Network, color: "text-indigo-600" },
    { name: "Interviewing", slug: "interviewing", icon: MessageCircle, color: "text-pink-600" },
];



export default function VocabularyPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
            <div className="text-center space-y-2">
                <Typography variant="h2">Vocabulary Topics</Typography>
                <Typography variant="p" className="text-muted-foreground">
                    Click a topic to explore related words with English and Urdu meanings.
                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {vocabularyTopics.map(({ name, slug, icon: Icon, color }) => (
                    <Card key={slug} className="bg-yellow-50 transition rounded-xl border-none shadow-sm">
                        <CardContent className="p-5">
                            <Link
                                href={`/vocabulary/${slug}`}
                                className="flex items-center gap-3 font-medium text-blue-700 underline underline-offset-2"
                            >
                                <Icon className={`w-5 h-5 ${color}`} />
                                {name}
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
