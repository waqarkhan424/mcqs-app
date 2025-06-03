import Link from "next/link";
import Typography from "@/components/ui/typography";
import { vocabularyTopics } from "@/lib/vocabulary-topics";

export default function VocabularySidebar({ activeTopic }: { activeTopic: string }) {
    return (
        <aside className="space-y-4">
            <Typography variant="h4">All Topics</Typography>
            <ul className="space-y-1">
                {vocabularyTopics.map((t) => (
                    <li key={t.slug}>
                        <Link
                            href={`/vocabulary/${t.slug}`}
                            className={`block px-3 py-1.5 rounded-md font-medium hover:bg-muted transition ${activeTopic === t.slug ? "bg-primary text-white" : "text-blue-600"
                                }`}
                        >
                            {t.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
