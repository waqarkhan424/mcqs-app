import NounsContent from "@/app/english/components/basic-grammar/nouns-content";
import PronounsContent from "@/app/english/components/basic-grammar/pronouns-content";
import VerbsContent from "@/app/english/components/basic-grammar/verbs-content";
import AdjectivesContent from "@/app/english/components/basic-grammar/adjectives-content";
import AdverbsContent from "@/app/english/components/basic-grammar/adverbs-content";
import PrepositionsContent from "@/app/english/components/basic-grammar/prepositions-content";
import ConjunctionsContent from "@/app/english/components/basic-grammar/conjunctions-content";
import InterjectionsContent from "@/app/english/components/basic-grammar/interjections-content";
import ArticlesContent from "@/app/english/components/basic-grammar/articles-content";


import TensesContent from "@/app/english/components/intermediate-grammar/tenses-content";
import ActivePassiveContent from "@/app/english/components/intermediate-grammar/active-passive-content";
import DirectIndirectContent from "@/app/english/components/intermediate-grammar/direct-indirect-content";
import SentenceStructureContent from "@/app/english/components/intermediate-grammar/sentence-structure-content";
import SubjectVerbAgreementContent from "@/app/english/components/intermediate-grammar/subject-verb-agreement-content";
import ModalsContent from "@/app/english/components/intermediate-grammar/modals-content";
import ConditionalsContent from "@/app/english/components/intermediate-grammar/conditionals-content";

export const grammarTopicsData: Record<string, { title: string; content: React.ReactNode }> = {
    //  Basic Grammar Topics
    "nouns": {
        title: "Nouns",
        content: <NounsContent />,
    },
    "pronouns": {
        title: "Pronouns",
        content: <PronounsContent />,
    },
    "verbs": {
        title: "Verbs",
        content: <VerbsContent />,
    },
    "adjectives": {
        title: "Adjectives",
        content: <AdjectivesContent />,
    },
    "adverbs": {
        title: "Adverbs",
        content: <AdverbsContent />,
    },
    "prepositions": {
        title: "Prepositions",
        content: <PrepositionsContent />,
    },
    "conjunctions": {
        title: "Conjunctions",
        content: <ConjunctionsContent />,
    },
    "interjections": {
        title: "Interjections",
        content: <InterjectionsContent />,
    },
    "articles": {
        title: "Articles",
        content: <ArticlesContent />,
    },


    //  Intermediate Grammar Topics
    "tenses": {
        title: "Tenses",
        content: <TensesContent />,
    },
    "active-and-passive-voice": {
        title: "Active and Passive Voice",
        content: <ActivePassiveContent />,
    },
    "direct-and-indirect-speech": {
        title: "Direct and Indirect Speech",
        content: <DirectIndirectContent />,
    },
    "sentence-structure": {
        title: "Sentence Structure",
        content: <SentenceStructureContent />,
    },
    "subject-verb-agreement": {
        title: "Subject-Verb Agreement",
        content: <SubjectVerbAgreementContent />,
    },
    "modals": {
        title: "Modals",
        content: <ModalsContent />,
    },
    "conditionals": {
        title: "Conditionals",
        content: <ConditionalsContent />,
    },
};
