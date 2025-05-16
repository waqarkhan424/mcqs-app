"use client";

import { upload_mcqs } from "../actions/upload_mcqs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function McqsUploader() {
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        setLoading(true);



        const mcqs =

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




            [
                {
                    "category": "islamic-studies",
                    "topic": "basic-islamic-studies-mcqs",
                    "question": "Which act will Muslims be questioned about first on Judgement Day?",
                    "options": ["Prayer", "Charity", "Fasting", "Pilgrimage"],
                    "correctAnswer": "Prayer"
                }

            ];


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








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
