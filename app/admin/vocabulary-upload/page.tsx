"use client";

import { useState } from "react";
import { add_bulk_vocabulary } from "../actions/add_bulk_vocabulary";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function VocabularyUploadPage() {
    const [input, setInput] = useState("");
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<{
        inserted: number;
        insertedWords: string[];
        skipped: string[];
    } | null>(null);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        const result = await add_bulk_vocabulary(formData);
        setLoading(false);
        setInput("");
        setTopic("");
        setFeedback(result);
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
            <div className="text-center space-y-2">
                <Typography variant="h2">Bulk Vocabulary Uploader</Typography>
                <Typography affects="description">
                    Paste multiple vocabulary entries with each block containing 4 lines: word, definition, Urdu meaning, and an example sentence.
                </Typography>
            </div>

            <form action={handleSubmit} className="space-y-4">
                <Textarea
                    name="bulkData"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Example:\n\nBurn\nTo be on fire or be damaged by fire.\nجلنا / آگ لگنا\nThe paper will burn if you hold it near the flame.`}
                    rows={15}
                    required
                />

                <Input
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic slug (e.g. essential-words)"
                    required
                />

                <Button type="submit" disabled={loading}>
                    {loading ? "Uploading..." : "Submit Vocabulary"}
                </Button>
            </form>

            {feedback && (
                <div className="mt-6 space-y-4">
                    {feedback.inserted > 0 && (
                        <div className="text-green-700 space-y-1">
                            <Typography variant="h4">Successfully added {feedback.inserted} words:</Typography>
                            <ul className="list-disc list-inside">
                                {feedback.insertedWords.map((word, index) => (
                                    <li key={index}>{word}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {feedback.skipped.length > 0 && (
                        <div className="text-red-600 space-y-1">
                            <Typography variant="h4"> Skipped {feedback.skipped.length} duplicate words:</Typography>
                            <ul className="list-disc list-inside">
                                {feedback.skipped.map((word, index) => (
                                    <li key={index}>{word}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
