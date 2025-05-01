"use client";

import { upload_mcqs } from "../actions/upload_mcqs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function McqsUploader() {
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        setLoading(true);

        //////////////////////////////////////////////////////////////////////////////////////////

        const mcqs = [

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








            {
                question: "Who is known as the founder of Public Administration?",
                options: ["Max Weber", "Frederick Taylor", "Woodrow Wilson", "Henry Fayol"],
                correctAnswer: "Woodrow Wilson",
                category: "general-knowledge",
                topic: "public-administration-mcqs"
            },








            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        ];




        ///////////////////////////////////////////////////////////////////////////////////////////

        await upload_mcqs(mcqs);
        setLoading(false);
    };

    return (
        <Button
            onClick={handleUpload}
            disabled={loading}
        >
            {loading ? "Uploading..." : "Upload MCQs"}
        </Button>
    );
}
