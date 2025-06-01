"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function add_bulk_vocabulary(formData: FormData) {
    const raw = formData.get("bulkData") as string;
    const topic = formData.get("topic") as string;

    if (!raw || !topic) return;

    const blocks = raw
        .split(/\n{2,}/) // split by 2 or more newlines
        .map(block => block.trim())
        .filter(block => block);

    const entries = blocks.map(block => {
        const lines = block.split("\n").map(line => line.trim());
        const [word, definition, urduMeaning, example] = lines;
        return { word, definition, urduMeaning, example, topic };
    }).filter(entry => entry.word && entry.definition && entry.urduMeaning && entry.example);

    await prisma.vocabulary.createMany({ data: entries });

    revalidatePath("/admin/vocabulary-upload");
}
