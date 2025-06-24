"use client";

import { useState } from "react";
import { extract_and_parse_mcqs } from "../actions/extract_and_parse_mcqs";
import { add_mcqs } from "../actions/add_mcqs";


export default function UploadMCQsPage() {
    const [parsedMCQs, setParsedMCQs] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleExtract = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);

        const res = await extract_and_parse_mcqs(formData);
        if (res?.parsed) {
            setParsedMCQs(JSON.stringify(res.parsed, null, 2));
        }
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
            <button onClick={handleExtract}>Extract MCQs</button>
            <textarea
                className="w-full h-80 border"
                value={parsedMCQs}
                onChange={(e) => setParsedMCQs(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit to DB</button>
        </div>
    );
}
