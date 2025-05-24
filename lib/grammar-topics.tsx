import NounsContent from "@/app/english/components/basic-grammar/nouns-content";
import PronounsContent from "@/app/english/components/basic-grammar/pronouns-content";
import VerbsContent from "@/app/english/components/basic-grammar/verbs-content";
import AdjectivesContent from "@/app/english/components/basic-grammar/adjectives-content";
import AdverbsContent from "@/app/english/components/basic-grammar/adverbs-content";
import PrepositionsContent from "@/app/english/components/basic-grammar/prepositions-content";
import ConjunctionsContent from "@/app/english/components/basic-grammar/conjunctions-content";
import InterjectionsContent from "@/app/english/components/basic-grammar/interjections-content";
import ArticlesContent from "@/app/english/components/basic-grammar/articles-content";


export const grammarTopicsData: Record<string, { title: string; content: React.ReactNode }> = {
    nouns: {
        title: "Nouns",
        content: <NounsContent />,
    },
    pronouns: {
        title: "Pronouns",
        content: <PronounsContent />,
    },
    verbs: {
        title: "Verbs",
        content: <VerbsContent />,
    },
    adjectives: {
        title: "Adjectives",
        content: <AdjectivesContent />,
    },
    adverbs: {
        title: "Adverbs",
        content: <AdverbsContent />,
    },
    prepositions: {
        title: "Prepositions",
        content: <PrepositionsContent />,
    },
    conjunctions: {
        title: "Conjunctions",
        content: <ConjunctionsContent />,
    },
    interjections: {
        title: "Interjections",
        content: <InterjectionsContent />,
    },
    articles: {
        title: "Articles",
        content: <ArticlesContent />,
    },
};
