"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { delete_vocabulary_word } from "../actions/delete_vocabulary_word";
import { update_vocabulary_word } from "../actions/update_vocabulary_word";

export default function VocabularyCard({ word }: { word: any }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${word.word}"?`)) {
            startTransition(() => {
                delete_vocabulary_word(word.id, word.topic);
            });
        }
    };

    const handleEdit = () => {
        const newWord = prompt("Edit Word", word.word);
        const newDefinition = prompt("Edit Definition", word.definition);
        const newUrduMeaning = prompt("Edit Urdu Meaning", word.urduMeaning || "") || undefined;
        const newExample = prompt("Edit Example", word.example || "") || undefined;


        if (!newWord || !newDefinition) return alert("Word and definition are required");

        startTransition(async () => {
            const result = await update_vocabulary_word({
                id: word.id,
                word: newWord,
                definition: newDefinition,
                urduMeaning: newUrduMeaning,
                example: newExample,
                topic: word.topic,
            });

            if (result.success) {
                router.refresh();
            } else {
                alert(result.error || "Failed to update");
            }
        });
    };

    return (
        <Card>
            <CardHeader className="pb-0">
                <CardTitle className="text-xl">{word.word}</CardTitle>




                <div className="flex justify-end gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={handleEdit}
                        disabled={isPending}
                    >
                        Edit
                    </Button>
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={isPending}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </Button>
                </div>



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

