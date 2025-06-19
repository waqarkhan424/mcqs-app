"use client";
import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { update_mcqs } from "@/app/actions/update_mcqs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

export default function EditDeleteMCQsCard({
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
    const [options, setOptions] = useState(q.options);
    const [correctAnswer, setCorrectAnswer] = useState(q.correctAnswer);
    const [explanation, setExplanation] = useState(q.explanation || "");
    const [deleted, setDeleted] = useState(false);
    const [openSingleDialog, setOpenSingleDialog] = useState(false);

    if (deleted) return null;

    async function handleDelete() {
        await delete_mcqs(q.id);
        setDeleted(true);
    }

    async function handleSave() {
        await update_mcqs(q.id, { question, options, correctAnswer, explanation });
        setIsEditing(false);
    }

    return (
        <Card className="relative px-5 py-5 space-y-4 shadow-sm border border-gray-200 bg-white">
            {enableDelete && (
                <div className="absolute top-2 right-2">
                    <Checkbox checked={selected} onCheckedChange={() => toggleSelect?.(q.id)} />
                </div>
            )}

            <CardContent className="space-y-4 px-0">
                <CardTitle className="text-base md:text-lg font-semibold text-gray-800">
                    {isEditing ? (
                        <Input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
                    ) : (
                        question
                    )}
                </CardTitle>

                <ul className="space-y-2">
                    {options.map((opt: string, idx: number) => (
                        <li key={idx} className="text-sm md:text-base flex items-start gap-1.5">
                            <span className="font-medium text-gray-800">{String.fromCharCode(65 + idx)}.</span>
                            {isEditing ? (
                                <Input
                                    value={opt}
                                    onChange={(e) => {
                                        const updated = [...options];
                                        updated[idx] = e.target.value;
                                        setOptions(updated);
                                    }}
                                />
                            ) : (
                                <span className={opt === correctAnswer ? "text-blue-600 font-semibold" : "text-gray-600"}>
                                    {opt}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                {isEditing && (
                    <>
                        <Input
                            className="mt-2"
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            placeholder="Correct Answer"
                        />
                        <Input
                            className="mt-2"
                            value={explanation}
                            onChange={(e) => setExplanation(e.target.value)}
                            placeholder="Explanation (optional)"
                        />
                    </>
                )}

                {!isEditing && explanation && (
                    <div className="text-sm text-gray-500 mt-3 border-t pt-3">{explanation}</div>
                )}
            </CardContent>

            <CardFooter className="gap-3 px-0">
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

                        {/* <Button size="sm" onClick={() => setIsEditing(true)}>Edit</Button> */}


                        {enableDelete && (
                            <Dialog open={openSingleDialog} onOpenChange={setOpenSingleDialog}>
                                <DialogTrigger asChild>
                                    <Button size="sm" variant="destructive">
                                        Delete
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you sure?</DialogTitle>
                                        <DialogDescription>This will permanently delete this MCQ.</DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => setOpenSingleDialog(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            onClick={async () => {
                                                await handleDelete();
                                                setOpenSingleDialog(false);
                                            }}
                                        >
                                            Yes, delete
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )}
                    </>
                )}
            </CardFooter>
        </Card>
    );
}
