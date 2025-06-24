// app/admin/mcqs-upload2/page.tsx
"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";
import { add_mcqs } from "../actions/add_mcqs";

export default function UploadMCQsPage() {
    const [parsedMCQs, setParsedMCQs] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleExtract = async () => {
        if (!file) return;
        setLoading(true);

        const { data } = await Tesseract.recognize(file, "eng");
        const text = data.text;

        // MCQ Regex Parse
        const mcqRegex =
            /(.+?)\?\s*A\.\s*(.+?)\s*B\.\s*(.+?)\s*C\.\s*(.+?)\s*D\.\s*(.+?)(?:\s*correctAnswer[:=]?\s*(\w))?/g;

        const results = [];
        let match;
        while ((match = mcqRegex.exec(text)) !== null) {
            const [_, question, a, b, c, d, correct] = match;
            results.push({
                question: question.trim(),
                options: [a.trim(), b.trim(), c.trim(), d.trim()],
                correctAnswer: correct?.trim() || "",
                category: "General Knowledge",
                topic: "OCR Upload",
            });
        }

        setParsedMCQs(JSON.stringify(results, null, 2));
        setLoading(false);
    };

    const handleSubmit = async () => {
        if (!parsedMCQs) return;
        const data = JSON.parse(parsedMCQs);
        await add_mcqs(data);
        alert("✅ Saved to DB");
        setParsedMCQs("");
    };

    return (
        <div className="p-4 space-y-4">
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <button
                onClick={handleExtract}
                className="px-4 py-2 bg-blue-600 text-white rounded"
                disabled={loading}
            >
                {loading ? "Extracting..." : "Extract MCQs"}
            </button>

            <textarea
                className="w-full h-80 border p-2 text-sm"
                value={parsedMCQs}
                onChange={(e) => setParsedMCQs(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded"
            >
                Submit to DB
            </button>
        </div>
    );
}
