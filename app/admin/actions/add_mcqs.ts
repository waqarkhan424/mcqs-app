"use server";

import prisma from "@/lib/prisma";
import { Question } from "@prisma/client";

export async function add_mcqs(data: Question[]) {
    for (const q of data) {
        await prisma.question.create({ data: q });
    }
}
