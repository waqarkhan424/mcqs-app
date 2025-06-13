//@ts-nocheck

"use client";

import { useTransition } from "react";
import { Trash2, Pencil } from "lucide-react";
import { delete_mcqs } from "../actions/delete_mcqs";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { Question } from "@prisma/client";

type Props = {
    questions: Question[]; // ✅ changed from mcqs to questions
};

export default function EditDeleteMcqsList({ questions }: Props) {
    if (!questions || questions.length === 0) {
        return <p className="text-muted-foreground">No MCQs found.</p>;
    }

    return (
        <div className="space-y-6">
            {questions.map((mcq, index) => (
                <EditDeleteMCQ key={mcq.id} mcq={mcq} index={index} />
            ))}
        </div>
    );
}

function EditDeleteMCQ({ mcq, index }: { mcq: Question; index: number }) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        startTransition(async () => {
            await delete_mcqs(mcq.id);
            // toast.success("Deleted!");
        });
    };

    return (
        <div className="space-y-4 border border-muted p-6 rounded-2xl bg-white shadow-sm">
            <Typography variant="p" className="text-sm font-medium text-muted-foreground">
                Question {index + 1}
            </Typography>

            <div className="space-y-1">
                <Typography variant="h3" className="text-foreground text-[20px] font-bold leading-snug">
                    {mcq.question}
                </Typography>

                {mcq.questionUrdu && (
                    <Typography variant="p" className="text-right text-base text-muted-foreground font-bold">
                        {mcq.questionUrdu}
                    </Typography>
                )}
            </div>

            <ul className="space-y-1 text-[16px] font-medium pl-2">
                {mcq.options.map((option, i) => {
                    const isCorrect = option === mcq.correctAnswer;
                    const label = String.fromCharCode(65 + i);
                    return (
                        <li key={i} className={isCorrect ? "text-green-700 font-semibold" : ""}>
                            {label}. {option}
                        </li>
                    );
                })}
            </ul>

            {mcq.explanationEnglish && (
                <Typography variant="p" className="text-sm text-muted-foreground">
                    Explanation: {mcq.explanationEnglish}
                </Typography>
            )}

            {mcq.explanationUrdu && (
                <Typography variant="p" className="text-sm text-muted-foreground">
                    وضاحت: {mcq.explanationUrdu}
                </Typography>
            )}

            <div className="flex gap-2 pt-3">
                <Button size="sm" variant="outline" disabled>
                    <Pencil className="w-4 h-4 mr-2" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={handleDelete} disabled={isPending}>
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                </Button>
            </div>
        </div>
    );
}
