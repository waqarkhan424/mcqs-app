"use server";

import prisma from "@/lib/prisma";

export async function update_mcqs(id: string, data: { question: string; correctAnswer: string; options: string[] }) {
    try {
        await prisma.question.update({
            where: { id },
            data,
        });
    } catch (err) {
        console.error("Error updating question:", err);
    }
}
