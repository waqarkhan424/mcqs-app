"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Parser for each MCQ block
function parseMcqBlock(block: string): any {
    const lines = block.trim().split("\n");
    let question = "", questionUrdu = "", options: string[] = [], correctAnswer = "", explanationEnglish = "", explanationUrdu = "";

    for (let line of lines) {
        if (line.startsWith("Question:")) question = line.replace("Question:", "").trim();
        else if (line.startsWith("Urdu:")) questionUrdu = line.replace("Urdu:", "").trim();
        else if (line.startsWith("Answer:")) correctAnswer = line.replace("Answer:", "").trim();
        else if (line.startsWith("Explanation:")) explanationEnglish = line.replace("Explanation:", "").trim();
        else if (line.startsWith("UrduExplanation:")) explanationUrdu = line.replace("UrduExplanation:", "").trim();
        else if (line.match(/^[A-D]\./)) options.push(line.trim());
    }

    return { question, questionUrdu, options, correctAnswer, explanationEnglish, explanationUrdu };
}

export async function add_bulk_mcqs(formData: FormData) {
    const raw = formData.get("bulkData") as string;
    const category = formData.get("category") as string;
    const topic = formData.get("topic") as string;

    const blocks = raw.split(/\n\s*\n/); // split by empty line

    let inserted = 0;
    const insertedQuestions: string[] = [];

    for (const block of blocks) {
        const parsed = parseMcqBlock(block);
        if (!parsed.question || !parsed.correctAnswer || parsed.options.length < 2) continue;

        const exists = await prisma.question1.findFirst({
            where: {
                question: parsed.question,
                topic,
                category,
            },
        });

        if (!exists) {
            await prisma.question1.create({
                data: {
                    question: parsed.question,
                    questionUrdu: parsed.questionUrdu,
                    options: parsed.options,
                    correctAnswer: parsed.correctAnswer,
                    explanationEnglish: parsed.explanationEnglish,
                    explanationUrdu: parsed.explanationUrdu,
                    category,
                    topic,
                },
            });

            insertedQuestions.push(parsed.question);
            inserted++;
        }
    }

    revalidatePath(`/category/${category}/${topic}`);
    return { inserted, insertedQuestions };
}
