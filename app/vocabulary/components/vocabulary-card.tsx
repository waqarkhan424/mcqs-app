"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { delete_vocabulary_word } from "../actions/delete_vocabulary_word";
import { update_vocabulary_word } from "../actions/update_vocabulary_word";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import EditVocabularyDialog from "./edit-vocabulary-dialog";

export default function VocabularyCard({ word }: { word: any }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleDelete = () => {
        startTransition(() => {
            delete_vocabulary_word(word.id, word.topic);
        });
    };

    const handleEdit = (updated: {
        word: string;
        definition: string;
        urduMeaning?: string;
        example?: string;
    }) => {
        startTransition(async () => {
            const result = await update_vocabulary_word({
                ...updated,
                id: word.id,
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


                {/* <div className="flex justify-end gap-2">
                    <EditVocabularyDialog wordData={word} disabled={isPending} onConfirm={handleEdit}>
                        <Button size="sm" variant="outline" disabled={isPending}>
                            Edit
                        </Button>
                    </EditVocabularyDialog>

                    <DeleteConfirmDialog onConfirm={handleDelete} disabled={isPending}>
                        <Button size="sm" variant="destructive" disabled={isPending}>
                            {isPending ? "Deleting..." : "Delete"}
                        </Button>
                    </DeleteConfirmDialog>
                </div> */}




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
