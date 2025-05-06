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
                question: "What term denotes a person living permanently in one region?",
                options: ["Resident", "Native", "Domicile", "Subject"],
                correctAnswer: "Resident",
                category: "english",
                topic: "one-word-substitutes"
            }










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
