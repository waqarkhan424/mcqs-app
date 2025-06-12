"use client";

import { useState } from "react";
import { add_bulk_mcqs } from "@/app/admin/actions/add_bulk_mcqs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";

export default function McqsUploadPage() {
    const [input, setInput] = useState("");
    const [topic, setTopic] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<{ inserted: number; insertedQuestions: string[] } | null>(null);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
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

            {feedback && (
                <div className="mt-4 space-y-2 text-green-700">
                    <p>Inserted: {feedback.inserted}</p>
                    <ul className="list-disc list-inside">
                        {feedback.insertedQuestions.map((q, i) => <li key={i}>{q}</li>)}
                    </ul>
                </div>
            )}
        </div>
    );
}
