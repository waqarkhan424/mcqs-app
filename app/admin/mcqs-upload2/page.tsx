//@ts-nocheck
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

        const { data } = await Tesseract.recognize(file, "eng", {
            logger: m => console.log(m),
        });

        let text = data.text;
        console.log("OCR Result:", text);

        // Fix common OCR mistakes
        const cleaned = text
            .replace(/\(8\)/g, "(B)")
            .replace(/\(0\)/g, "(D)")
            .replace(/\(6\)/g, "(C)")
            .replace(/\(€\)/g, "(C)")
            .replace(/[‘’“”]/g, '"')
            .replace(/ +/g, " ") // multiple spaces to single
            .replace(/[^\x20-\x7E\n]/g, "") // remove weird chars
            .replace(/\s+\./g, ".")
            .trim();

        // Match questions with optional numbering and 4-5 options
        const mcqRegex =
            /(?:^|\n)(\d+\.\s*)?(.+?)\s*\(A\)\s*([\s\S]*?)\s*\(B\)\s*([\s\S]*?)\s*\(C\)\s*([\s\S]*?)\s*\(D\)\s*([\s\S]*?)(?:\s*\(E\)\s*([\s\S]*?))?(?=(?:\n\d+\.\s)|$)/g;

        let resultsText = "";
        let match;

        while ((match = mcqRegex.exec(cleaned)) !== null) {
            const [_, number, question, a, b, c, d, e] = match;
            const questionLine = number ? `${number}${question.trim()}` : question.trim();
            resultsText += `${questionLine}\n(A) ${a.trim()}\n(B) ${b.trim()}\n(C) ${c.trim()}\n(D) ${d.trim()}`;
            if (e) resultsText += `\n(E) ${e.trim()}`;
            resultsText += `\n\n`;
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
