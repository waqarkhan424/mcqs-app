"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function UploadMCQsPage() {
    const [parsedMCQs, setParsedMCQs] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleExtract = async () => {
        if (!file) return;
        setLoading(true);

        const { data } = await Tesseract.recognize(file, "eng");
        let text = data.text;

        // Pre-clean the OCR text
        const cleaned = text
            .replace(/\(8\)/g, "(B)")
            .replace(/\(0\)/g, "(D)")
            .replace(/\(¥\)/g, "(C)")
            .replace(/\(€\)/g, "(C)")
            .replace(/\s+\./g, ".")
            .replace(/\s+/g, " ")
            .replace(/[^\w\s\(\)\?\.\-]/g, ""); // remove junk

        // Flexible MCQ regex
        const mcqRegex =
            /(?:\d+\.\s*)?(.+?)\s*\(A\)\s*([\s\S]+?)\s*\(B\)\s*([\s\S]+?)\s*\(C\)\s*([\s\S]+?)\s*\(D\)\s*([\s\S]+?)(?=(?:\d+\.\s)|$)/g;

        let resultsText = "";
        let match;
        while ((match = mcqRegex.exec(cleaned)) !== null) {
            const [_, question, a, b, c, d] = match;
            resultsText += `${question.trim()}\n(A) ${a.trim()}\n(B) ${b.trim()}\n(C) ${c.trim()}\n(D) ${d.trim()}\n\n`;
        }

        setParsedMCQs(resultsText.trim());
        setLoading(false);
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
                className="w-full h-96 border p-2 text-sm"
                value={parsedMCQs}
                onChange={(e) => setParsedMCQs(e.target.value)}
            />
        </div>
    );
}
