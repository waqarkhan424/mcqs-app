import Typography from "@/components/ui/typography";

export default function VocabularyHeader({ searchTerm, topic }: { searchTerm: string; topic: string }) {
    const formattedTopic = topic
        .replace(/-/g, " ")
        .replace(/\bCss\b/i, "CSS");

    const finalTitle = formattedTopic.toLowerCase().includes("vocabulary")
        ? formattedTopic
        : `${formattedTopic} Vocabulary`;

    return searchTerm ? (
        <Typography variant="h3" className="text-center">
            Search results for "{searchTerm}"
        </Typography>
    ) : (
        <Typography variant="h2" className="text-center capitalize">
            {finalTitle}
        </Typography>
    );
}
