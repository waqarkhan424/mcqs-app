"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Type for parsed MCQ
type ParsedMCQ = {
    question: string;
    options: string[];
    correctAnswer: string; // only the letter (e.g. "A", "B", "C")
};

// Helper to normalize strings
function normalize(str: string) {
    return str.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ");
}

// Updated parser
function parseMcqBlock(block: string): ParsedMCQ {
    const lines = block.trim().split("\n");
    let question = "", correctLetter = "";
    const options: string[] = [];

    for (const line of lines) {
        if (line.startsWith("question:")) {
            question = line.replace("question:", "").trim();
        } else if (line.startsWith("correctAnswer:")) {
            correctLetter = line.replace("correctAnswer:", "").trim().toUpperCase();
        } else if (/^[A-E]\.\s*/.test(line)) {
            options.push(line.trim());
        }
    }

    return { question, options, correctAnswer: correctLetter };
}

// Main function to handle bulk upload
export async function add_bulk_mcqs(formData: FormData) {
    const raw = formData.get("bulkData") as string;
    const category = formData.get("category") as string;
    const topic = formData.get("topic") as string;

    const blocks = raw.split(/\n\s*\n/);

    let inserted = 0;
    const insertedQuestions: string[] = [];
    const skipped: string[] = [];

    const existingQuestions = await prisma.question.findMany();
    const normalizedExisting = existingQuestions.map(q => normalize(q.question));

    for (const block of blocks) {
        const parsed = parseMcqBlock(block);

        if (!parsed.question || !parsed.correctAnswer || parsed.options.length < 2) continue;

        const normalizedQuestion = normalize(parsed.question);
        const isDuplicate = normalizedExisting.includes(normalizedQuestion);

        if (!isDuplicate) {
            await prisma.question.create({
                data: {
                    question: parsed.question,
                    options: parsed.options,
                    correctAnswer: parsed.correctAnswer, //  Only the letter now
                    category,
                    topic,
                },
            });

            insertedQuestions.push(parsed.question);
            inserted++;
            normalizedExisting.push(normalizedQuestion);
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
