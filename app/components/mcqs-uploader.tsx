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
                    question: "Udai and Vishal stand facing each other at sunrise. Vishal’s shadow falls to Udai’s left. Which way is Udai looking?",
                    options: ["East", "West", "North", "South"],
                    correctAnswer: "South",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "Point Y lies east of X, and X lies north of Z. Point P lies south of Z. From Y’s standpoint, P is in which direction?",
                    options: ["North", "South", "Southeast", "None of these"],
                    correctAnswer: "South",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "In a puzzle mapping directions: SE→N, NE→W, and so on, what does W map to?",
                    options: ["Northeast", "Northwest", "Southeast", "Southwest"],
                    correctAnswer: "Southwest",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "A man goes 5 km south, turns right and goes 3 km, then turns left and goes 5 km. Where is he now relative to his start?",
                    options: ["West", "South", "Northeast", "Southwest"],
                    correctAnswer: "West",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "At 6:00 PM Rahul places his watch so the hour hand points north. At 9:15 PM, which way does the minute hand point?",
                    options: ["Southeast", "South", "North", "West"],
                    correctAnswer: "Southeast",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "Rasik walks 20 m north, 30 m east, 35 m south, 15 m east, and 15 m north. How far and in which direction is he from his start?",
                    options: ["15 m West", "30 m East", "30 m West", "45 m East"],
                    correctAnswer: "30 m East",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "Two cars start 150 km apart on a straight road. Car A goes 25 km forward, turns right 15 km, turns left 25 km, then returns to the main road. Car B travels 35 km straight. What is the distance between them then?",
                    options: ["65 km", "75 km", "80 km", "85 km"],
                    correctAnswer: "80 km",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "From point X, Jayant goes 15 m west, 20 m south, 15 m east, then 12 m north. Where is he now relative to X?",
                    options: ["32 m South", "47 m East", "42 m North", "27 m South"],
                    correctAnswer: "27 m South",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "At sunset, Rekha and Hema face each other. Hema’s shadow falls to Hema’s right. Which way is Rekha facing?",
                    options: ["North", "South", "East", "Data inadequate"],
                    correctAnswer: "Data inadequate",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                },
                {
                    question: "A cyclist rides north, turns left and goes 1 km, then left and goes 2 km, ending up 1 km west of start. How far did he go north at first?",
                    options: ["1 km", "2 km", "3 km", "5 km"],
                    correctAnswer: "3 km",
                    category: "iq",
                    topic: "direction-sense-mcqs"
                }
            ]




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
