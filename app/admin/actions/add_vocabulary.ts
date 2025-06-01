"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function add_vocabulary(formData: FormData) {
    const word = formData.get("word") as string;
    const definition = formData.get("definition") as string;
    const urduMeaning = formData.get("urduMeaning") as string;
    const example = formData.get("example") as string;
    const topic = formData.get("topic") as string;

    await prisma.vocabulary.create({
        data: {
            word,
            definition,
            urduMeaning,
            example,
            topic,
        },
    });

    revalidatePath("/admin/vocabulary-upload");
}
