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
                    question: "Bernardo Arévalo assumed office as the 52nd President of ____ in January 2024.",
                    options: ["Guatemala", "Luxembourg", "Congo", "None"],
                    correctAnswer: "Guatemala",
                    category: "asf",
                    topic: "asf-assistant-director-past-paper-2024"
                },

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
