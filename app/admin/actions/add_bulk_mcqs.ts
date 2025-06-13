"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Parser for each MCQ block
function parseMcqBlock(block: string): any {
    const lines = block.trim().split("\n");
    let question = "", questionUrdu = "", options: string[] = [], correctAnswer = "", explanationEnglish = "", explanationUrdu = "";

    for (let line of lines) {
        if (line.startsWith("question:")) question = line.replace("question:", "").trim();
        else if (line.startsWith("questionUrdu:")) questionUrdu = line.replace("questionUrdu:", "").trim();
        else if (line.startsWith("correctAnswer:")) correctAnswer = line.replace("correctAnswer:", "").trim();
        else if (line.startsWith("explanationEnglish:")) explanationEnglish = line.replace("explanationEnglish:", "").trim();
        else if (line.startsWith("explanationUrdu:")) explanationUrdu = line.replace("explanationUrdu:", "").trim();
        else if (
            line &&
            !line.includes(":") &&
            !line.startsWith("question") &&
            !line.startsWith("explanation") &&
            !line.startsWith("correctAnswer")
        ) {
            options.push(line.trim());
        }
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

        const normalizedQuestion = parsed.question.trim().toLowerCase();

        const exists = await prisma.question1.findFirst({
            where: {
                question: normalizedQuestion,
            },
        });


        if (!exists) {
            await prisma.question1.create({
                data: {
                    question: normalizedQuestion,
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
