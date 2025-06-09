
import Typography from "@/components/ui/typography";
import TopicLinks from "@/app/components/topic-links";
import { categoryTopics } from "@/lib/topics";
import { pastPapers } from "@/lib/category-data";


interface Props {
    params: Promise<{ slug: string }>;
}

export default async function McqsByCategory(props: Props) {
    const { slug } = await props.params;


    const topics = categoryTopics[slug] || [];

    const isPastPaper = pastPapers.some((p) => p.key === slug);


    return (


        <div className="px-4 pt-12 pb-20 sm:pt-16 sm:pb-28 max-w-5xl mx-auto space-y-6">

            <div className="border-b border-border pb-4 space-y-2">
                <Typography variant="h2" className="capitalize">
                    {slug.replace(/-/g, " ")} {isPastPaper ? "Past Papers" : "MCQs"}
                </Typography>
                <Typography affects="muted" className="text-sm sm:text-base">
                    Select a topic below to start practicing. Each topic is packed with important and exam-relevant questions.
                </Typography>
            </div>

            {topics.length > 0 && (
                <div className="pl-2">
                    <TopicLinks category={slug} topics={topics} />
                </div>
            )}
        </div>



    );
}

