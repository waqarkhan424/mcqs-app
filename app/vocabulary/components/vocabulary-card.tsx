import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function VocabularyCard({ word }: { word: any }) {
    return (
        <Card>
            <CardHeader className="pb-0">
                <CardTitle className="text-xl">{word.word}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
                <p className="text-lg text-gray-700">{word.definition}</p>
                <p className="text-lg text-green-700">{word.urduMeaning}</p>
                <p className="text-lg text-blue-700 italic">{word.example}</p>

                {/* <Typography variant="p" size="lg" color="muted-foreground">
                    {word.definition}
                </Typography>
                <Typography variant="p" size="lg" color="success">
                    {word.urduMeaning}
                </Typography>
                <Typography variant="p" size="lg" color="primary" className="italic">
                    {word.example}
                </Typography> */}


            </CardContent>
        </Card>
    );
}
