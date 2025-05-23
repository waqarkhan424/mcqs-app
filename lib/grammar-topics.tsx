import NounsContent from "@/app/english/components/nouns-content";
// import PronounsContent from "@/app/english/components/pronouns-content";

export const grammarTopicsData: Record<string, { title: string; content: React.ReactNode }> = {

    nouns: {
        title: "Nouns",
        content: <NounsContent />,
    },
    // pronouns: {
    //   title: "Pronouns",
    //   content: <PronounsContent />,
    // },
};
