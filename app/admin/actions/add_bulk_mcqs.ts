"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Type for parsed MCQ
type ParsedMCQ = {
    question: string;
    options: string[];
    correctAnswer: string;
};

// Helper function to normalize question string
function normalize(str: string) {
    return str.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ");
}

// Parser for each MCQ block
function parseMcqBlock(block: string): ParsedMCQ {
    const lines = block.trim().split("\n");
    let question = "", correctAnswer = "";
    const options: string[] = [];

    for (const line of lines) {
        if (line.startsWith("question:")) {
            question = line.replace("question:", "").trim();
        } else if (line.startsWith("correctAnswer:")) {
            correctAnswer = line.replace("correctAnswer:", "").trim();
        } else if (
            line &&
            !line.includes(":") &&
            !line.startsWith("question") &&
            !line.startsWith("correctAnswer")
        ) {
            options.push(line.trim());
        }
    }

    return { question, correctAnswer, options };
}

// Main function to handle bulk upload
export async function add_bulk_mcqs(formData: FormData) {
    const raw = formData.get("bulkData") as string;
    const category = formData.get("category") as string;
    const topic = formData.get("topic") as string;

    const blocks = raw.split(/\n\s*\n/); // Split by empty lines

    let inserted = 0;
    const insertedQuestions: string[] = [];
    const skipped: string[] = [];

    // Fetch all existing questions once
    const existingQuestions = await prisma.question.findMany();
    const normalizedExisting = existingQuestions.map((q) => normalize(q.question));

    for (const block of blocks) {
        const parsed = parseMcqBlock(block);
        if (!parsed.question || !parsed.correctAnswer || parsed.options.length < 2) continue;

        const normalizedQuestion = normalize(parsed.question);

        // Check if normalized version already exists
        const isDuplicate = normalizedExisting.includes(normalizedQuestion);

        if (!isDuplicate) {
            await prisma.question.create({
                data: {
                    question: parsed.question,
                    options: parsed.options,
                    correctAnswer: parsed.correctAnswer,
                    category,
                    topic,
                },
            });

            insertedQuestions.push(parsed.question);
            inserted++;
            normalizedExisting.push(normalizedQuestion); // Add to local list to avoid re-checking DB
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
