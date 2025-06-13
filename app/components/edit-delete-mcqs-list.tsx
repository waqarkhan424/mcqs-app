"use client";

import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { update_mcqs } from "@/app/actions/update_mcqs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export default function EditDeleteMcqsList({ questions }: { questions: any[] }) {
    return (
        <div className="space-y-6">
            {questions.map((q) => (
                <EditDeleteMCQ key={q.id} q={q} />
            ))}
        </div>
    );
}

function EditDeleteMCQ({ q }: any) {
    const [isEditing, setIsEditing] = useState(false);
    const [question, setQuestion] = useState(q.question);
    const [questionUrdu, setQuestionUrdu] = useState(q.questionUrdu || "");
    const [options, setOptions] = useState(q.options);
    const [correctAnswer, setCorrectAnswer] = useState(q.correctAnswer);
    const [explanationEnglish, setExplanationEnglish] = useState(q.explanationEnglish || "");
    const [explanationUrdu, setExplanationUrdu] = useState(q.explanationUrdu || "");
    const [deleted, setDeleted] = useState(false);

    if (deleted) return null;

    async function handleDelete() {
        await delete_mcqs(q.id);
        setDeleted(true);
    }

    async function handleSave() {
        await update_mcqs(q.id, {
            question,
            questionUrdu,
            options,
            correctAnswer,
            explanationEnglish,
            explanationUrdu,
        });
        setIsEditing(false);
    }

    return (
        <Card>
            <CardContent className="space-y-2">
                {/* English Question */}
                <CardTitle>
                    {isEditing ? (
                        <Input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question"
                        />
                    ) : (
                        question
                    )}
                </CardTitle>

                {/* Urdu Question */}
                {isEditing ? (
                    <Input
                        value={questionUrdu}
                        onChange={(e) => setQuestionUrdu(e.target.value)}
                        placeholder="Question Urdu"
                    />
                ) : (
                    questionUrdu && (
                        <CardDescription className="text-base">
                            {questionUrdu}
                        </CardDescription>
                    )
                )}

                {/* Options */}
                <ul className="list-none pl-2 space-y-0.5">
                    {options.map((opt: string, idx: number) => (
                        <li key={idx}>
                            {String.fromCharCode(65 + idx)}.{" "}
                            {isEditing ? (
                                <Input
                                    value={opt}
                                    onChange={(e) => {
                                        const newOptions = [...options];
                                        newOptions[idx] = e.target.value;
                                        setOptions(newOptions);
                                    }}
                                />
                            ) : (
                                <span
                                    className={
                                        opt === correctAnswer
                                            ? "text-primary font-semibold"
                                            : "text-muted-foreground"
                                    }
                                >
                                    {opt}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Correct Answer */}
                {isEditing ? (
                    <Input
                        className="mt-2"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        placeholder="Correct Answer"
                    />
                ) : (
                    <div className="pt-2 text-sm">
                        <strong>Correct Answer:</strong>{" "}
                        <span className="text-primary">{correctAnswer}</span>
                    </div>
                )}

                {/* Explanation English */}
                {isEditing ? (
                    <Input
                        value={explanationEnglish}
                        onChange={(e) => setExplanationEnglish(e.target.value)}
                        placeholder="Explanation English"
                    />
                ) : (
                    explanationEnglish && (
                        <div className="pt-2 text-sm text-muted-foreground">
                            {explanationEnglish}
                        </div>
                    )
                )}

                {/* Explanation Urdu */}
                {isEditing ? (
                    <Input
                        value={explanationUrdu}
                        onChange={(e) => setExplanationUrdu(e.target.value)}
                        placeholder="Explanation Urdu"
                    />
                ) : (
                    explanationUrdu && (
                        <div className="pt-1 text-sm text-muted-foreground">
                            {explanationUrdu}
                        </div>
                    )
                )}
            </CardContent>

            {/* Action Buttons */}
            <CardFooter className="gap-4">
                {isEditing ? (
                    <>
                        <Button size="sm" onClick={handleSave}>
                            Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        {/* <Button size="sm" onClick={() => setIsEditing(true)}>
                            Edit
                        </Button>
                        <Button size="sm" variant="destructive" onClick={handleDelete}>
                            Delete
                        </Button> */}
                    </>
                )}
            </CardFooter>
        </Card>
    );
}
