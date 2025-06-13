"use client";

import { useState } from "react";
import { add_bulk_mcqs } from "@/app/admin/actions/add_bulk_mcqs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";


export default function McqsUploadPage() {
    const [input, setInput] = useState("");
    const [topic, setTopic] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorBlocks, setErrorBlocks] = useState<{ block: string[]; lineStart: number }[]>([]);
    const [feedback, setFeedback] = useState<{
        inserted: number;
        insertedQuestions: string[];
        skipped: string[]
    } | null>(null);



    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setFeedback(null);
        setErrorBlocks([]);

        const raw = formData.get("bulkData") as string;
        const blocks = raw.split(/\n\s*\n/);
        const errors: { block: string[]; lineStart: number }[] = [];

        let lineIndex = 0;
        for (let i = 0; i < blocks.length; i++) {
            const lines = blocks[i].trim().split("\n").map(l => l.trim()).filter(Boolean);
            if (lines.length < 4) {
                errors.push({
                    block: lines,
                    lineStart: lineIndex + 1
                });
            }
            lineIndex += lines.length + 1;
        }

        if (errors.length > 0) {
            setErrorBlocks(errors);
            setLoading(false);
            return;
        }

        const result = await add_bulk_mcqs(formData);
        setLoading(false);
        setInput("");
        setTopic("");
        setCategory("");
        setFeedback(result);
    }


    return (
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
            <Typography variant="h2" className="text-center">Upload MCQs</Typography>

            <form action={handleSubmit} className="space-y-4">
                <Textarea
                    name="bulkData"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={12}
                    placeholder={`Example:\n\nquestion: A hater of knowledge and learning\nquestionUrdu: علم اور سیکھنے سے نفرت کرنے والا شخص\nBibliophile\nPhilologist\nMisogynist\nMisologist\ncorrectAnswer: Misologist\nexplanationEnglish: A misologist is someone who dislikes or hates reasoning, logic, or learning.\nexplanationUrdu: Misologist وہ شخص ہوتا ہے جو دلیل، منطق یا علم سے نفرت کرتا ہو۔`}
                    required
                />
                <Input name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category (e.g. english)" required />
                <Input name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Enter topic slug (e.g. one-word-substitutes-mcqs)" required />

                <Button type="submit" disabled={loading}>{loading ? "Uploading..." : "Submit"}</Button>
            </form>


            {errorBlocks.length > 0 && (
                <div className="space-y-4 mt-6">
                    <div className="text-red-600">
                        <Typography variant="h4">Formatting Error Detected</Typography>
                        <p className="text-sm">The following blocks are incomplete (must have at least 4 lines):</p>
                    </div>

                    {errorBlocks.map((block, i) => (
                        <Alert variant="destructive" key={i}>
                            <AlertTitle>Invalid Entry Starting at Line {block.lineStart}</AlertTitle>
                            <AlertDescription>
                                <pre className="whitespace-pre-wrap text-sm mt-1">{block.block.join("\n")}</pre>
                            </AlertDescription>
                        </Alert>
                    ))}
                </div>
            )}


            {feedback && (
                <div className="mt-6 space-y-4">
                    {feedback.inserted > 0 && (
                        <div className="text-green-700 space-y-1">
                            <Typography variant="h4">Successfully added {feedback.inserted} MCQs:</Typography>
                            <ul className="list-disc list-inside">
                                {feedback.insertedQuestions.map((q, i) => (
                                    <li key={i}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    )}


                    {feedback.skipped?.length > 0 && (
                        <div className="text-red-600 space-y-1">
                            <Typography variant="h4">Skipped {feedback.skipped.length} duplicate MCQs:</Typography>
                            <ul className="list-disc list-inside">
                                {feedback.skipped.map((q, i) => (
                                    <li key={i}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            )}
        </div>


    );
}
