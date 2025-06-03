import Typography from "@/components/ui/typography";

export default function VocabularyHeader({ searchTerm, topic }: { searchTerm: string, topic: string }) {
    return searchTerm ? (
        <Typography variant="h3" className="text-center">
            Search results for "{searchTerm}"
        </Typography>
    ) : (
        <Typography variant="h2" className="capitalize text-center">
            {topic.replace(/-/g, " ")} Vocabulary
        </Typography>
    );
}
