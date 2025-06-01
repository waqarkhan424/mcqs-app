"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function add_bulk_vocabulary(formData: FormData) {
    const raw = formData.get("bulkData") as string;
    const topic = formData.get("topic") as string;

    if (!raw || !topic) return { inserted: 0, skipped: [], insertedWords: [] };

    const lines = raw
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

    const entries = [];
    const skipped: string[] = [];
    const insertedWords: string[] = [];

    for (let i = 0; i < lines.length; i += 4) {
        const word = lines[i];
        const definition = lines[i + 1];
        const urduMeaning = lines[i + 2];
        const example = lines[i + 3];

        if (word && definition && urduMeaning && example) {
            const existing = await prisma.vocabulary.findFirst({
                where: { word },
            });

            if (!existing) {
                entries.push({ word, definition, urduMeaning, example, topic });
                insertedWords.push(word);
            } else {
                skipped.push(word);
            }
        }
    }

    if (entries.length > 0) {
        await prisma.vocabulary.createMany({ data: entries });
        revalidatePath("/admin/vocabulary-upload");
    }

    return {
        inserted: entries.length,
        skipped,
        insertedWords,
    };
}
