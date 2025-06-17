"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Type for parsed MCQ
type ParsedMCQ = {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
};

// Parser for each MCQ block
function parseMcqBlock(block: string): ParsedMCQ {
    const lines = block.trim().split("\n");
    let question = "", correctAnswer = "", explanation = "";
    const options: string[] = [];

    for (const line of lines) {
        if (line.startsWith("question:")) {
            question = line.replace("question:", "").trim();
        } else if (line.startsWith("correctAnswer:")) {
            correctAnswer = line.replace("correctAnswer:", "").trim();
        } else if (line.startsWith("explanation:")) {
            explanation = line.replace("explanation:", "").trim();
        } else if (
            line &&
            !line.includes(":") &&
            !line.startsWith("question") &&
            !line.startsWith("correctAnswer") &&
            !line.startsWith("explanation")
        ) {
            options.push(line.trim());
        }
    }

    return { question, correctAnswer, explanation, options };
}

// Main function to handle bulk upload
export async function add_bulk_mcqs(formData: FormData) {
    const raw = formData.get("bulkData") as string;
    const category = formData.get("category") as string;
    const topic = formData.get("topic") as string;

    const blocks = raw.split(/\n\s*\n/); // split by empty lines

    let inserted = 0;
    const insertedQuestions: string[] = [];
    const skipped: string[] = [];

    for (const block of blocks) {
        const parsed = parseMcqBlock(block);
        if (!parsed.question || !parsed.correctAnswer || parsed.options.length < 2) continue;

        const normalizedQuestion = parsed.question.trim().toLowerCase();

        const exists = await prisma.question.findFirst({
            where: {
                question: normalizedQuestion,
            },
        });

        if (!exists) {
            await prisma.question.create({
                data: {
                    question: normalizedQuestion,
                    options: parsed.options,
                    correctAnswer: parsed.correctAnswer,
                    explanation: parsed.explanation,
                    category,
                    topic,
                },
            });

            insertedQuestions.push(parsed.question);
            inserted++;
        } else {
            skipped.push(parsed.question);
        }
    }

    revalidatePath(`/category/${category}/${topic}`);

    return {
        inserted,
        insertedQuestions,
        skipped,
    };
}
