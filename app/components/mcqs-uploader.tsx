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


            { question: "Which language is spoken by the largest population in Pakistan?", options: ["Urdu", "Punjabi", "Sindhi", "Saraiki"], correctAnswer: "Urdu", category: "general-knowledge", topic: "languages" },











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
