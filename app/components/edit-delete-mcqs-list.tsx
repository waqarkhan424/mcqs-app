"use client";

import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { update_mcqs } from "@/app/actions/update_mcqs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export default function EditDeleteMcqsList({
    questions,
    enableDelete = true,
}: {
    questions: any[];
    enableDelete?: boolean;
}) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const toggleSelect = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (selectedIds.length === questions.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(questions.map((q) => q.id));
        }
    };

    const handleDeleteSelected = async () => {
        await Promise.all(selectedIds.map((id) => delete_mcqs(id)));
        window.location.reload();
    };

    return (
        <div className="space-y-6">
            {enableDelete && (
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            checked={selectedIds.length === questions.length}
                            onCheckedChange={toggleAll}
                        />
                        <span className="text-sm font-medium">Select All</span>
                    </div>
                    <Button
                        variant="destructive"
                        size="sm"
                        disabled={selectedIds.length === 0}
                        onClick={() => {
                            const confirmDelete = window.confirm(
                                `Are you sure you want to delete ${selectedIds.length} selected MCQ(s)?`
                            );
                            if (confirmDelete) {
                                handleDeleteSelected();
                            }
                        }}
                    >
                        Delete ({selectedIds.length})
                    </Button>
                </div>
            )}

            {questions.map((q, idx) => (
                <EditDeleteMCQ
                    key={q.id}
                    q={q}
                    index={idx + 1}
                    enableDelete={enableDelete}
                    selected={selectedIds.includes(q.id)}
                    toggleSelect={toggleSelect}
                />
            ))}
        </div>
    );
}

function EditDeleteMCQ({
    q,
    index,
    enableDelete,
    selected,
    toggleSelect,
}: {
    q: any;
    index: number;
    enableDelete?: boolean;
    selected?: boolean;
    toggleSelect?: (id: string) => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [question, setQuestion] = useState(q.question);
    const [questionUrdu, setQuestionUrdu] = useState(q.questionUrdu || "");
    const [options, setOptions] = useState(q.options);
    const [correctAnswer, setCorrectAnswer] = useState(q.correctAnswer);
    const [explanationEnglish, setExplanationEnglish] = useState(
        q.explanationEnglish || ""
    );
    const [explanationUrdu, setExplanationUrdu] = useState(
        q.explanationUrdu || ""
    );
    const [deleted, setDeleted] = useState(false);

    if (deleted) return null;

    async function handleDelete() {
        const confirmed = window.confirm("Are you sure you want to delete this MCQ?");
        if (confirmed) {
            await delete_mcqs(q.id);
            setDeleted(true);
        }
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
        <Card className="relative">
            <div className="absolute -top-3 -left-3 bg-primary text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center shadow">
                {index}
            </div>

            {enableDelete && (
                <div className="absolute top-2 right-3">
                    <Checkbox
                        checked={selected}
                        onCheckedChange={() => toggleSelect?.(q.id)}
                    />
                </div>
            )}

            <CardContent className="space-y-3 pt-8">
                <CardTitle>
                    {isEditing ? (
                        <Input
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder={`Question ${index}`}
                        />
                    ) : (
                        question
                    )}
                </CardTitle>

                {isEditing ? (
                    <Input
                        value={questionUrdu}
                        onChange={(e) => setQuestionUrdu(e.target.value)}
                        placeholder="Question Urdu"
                    />
                ) : (
                    questionUrdu && (
                        <CardDescription className="text-base text-green-700 font-medium">
                            {questionUrdu}
                        </CardDescription>
                    )
                )}

                <ul className="list-none pl-2 space-y-1 mt-1">
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

                {isEditing ? (
                    <Input
                        className="mt-2"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        placeholder="Correct Answer"
                    />
                ) : (
                    <div className="pt-2 text-sm font-semibold">
                        Correct Answer:{" "}
                        <span className="text-primary">{correctAnswer}</span>
                    </div>
                )}

                {isEditing ? (
                    <Input
                        value={explanationEnglish}
                        onChange={(e) => setExplanationEnglish(e.target.value)}
                        placeholder="Explanation English"
                    />
                ) : (
                    explanationEnglish && (
                        <div className="pt-4 text-sm text-muted-foreground">
                            {explanationEnglish}
                        </div>
                    )
                )}

                {isEditing ? (
                    <Input
                        value={explanationUrdu}
                        onChange={(e) => setExplanationUrdu(e.target.value)}
                        placeholder="Explanation Urdu"
                    />
                ) : (
                    explanationUrdu && (
                        <div className="text-sm text-green-700">{explanationUrdu}</div>
                    )
                )}
            </CardContent>

            <CardFooter className="gap-4">
                {isEditing ? (
                    <>
                        <Button size="sm" onClick={handleSave}>
                            Save
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Button size="sm" onClick={() => setIsEditing(true)}>
                            Edit
                        </Button>
                        {enableDelete && (
                            <Button
                                size="sm"
                                variant="destructive"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        )}
                    </>
                )}
            </CardFooter>
        </Card>
    );
}
