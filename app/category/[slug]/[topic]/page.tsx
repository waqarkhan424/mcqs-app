import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";
import { categoryTopics } from "@/lib/topics";
import slugify from "slugify"
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";



interface Props {
    params: Promise<{ slug: string; topic: string }>;
}

export default async function McqsByTopic(props: Props) {
    const { slug, topic } = await props.params;

    const decodedTopic = decodeURIComponent(topic);

    const originalTopics = categoryTopics[slug] || [];
    const originalTopic = originalTopics.find(
        (t) => slugify(t, { lower: true, strict: true }) === decodedTopic
    );




    const questions = await prisma.question.findMany({
        where: {
            category: slug,
            topic: decodedTopic,
        },
    });

    return (

        <div className="px-4 pt-12 pb-20 sm:pt-16 sm:pb-28 max-w-5xl mx-auto space-y-6">

            <div className="bg-muted p-4 text-left rounded-lg">
                <Typography variant="h2" className="capitalize">
                    {originalTopic || decodedTopic.replace(/-/g, " ")} MCQs
                </Typography>
            </div>



            {questions.length === 0 ? (
                <Card className="bg-yellow-50">
                    <CardContent className="text-center space-y-2">
                        <CardTitle > MCQs Coming Soon!</CardTitle>
                        <CardDescription >
                            We're working hard to upload high-quality questions for this topic. Please check back later.
                        </CardDescription>
                    </CardContent>
                </Card>
            ) : (
                <EditDeleteMcqsList questions={questions} />
            )}

        </div>

    );
}
