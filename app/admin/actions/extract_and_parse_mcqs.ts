"use server";

import { writeFile } from "fs/promises";
import path from "path";
import { recognize } from "tesseract.js";

// OCR + Parse
export async function extract_and_parse_mcqs(formData: FormData) {
    const file = formData.get("image") as File;
    if (!file) return { error: "No file uploaded." };

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadPath = path.join(process.cwd(), "public", "uploads", file.name);
    await writeFile(uploadPath, buffer);

    // OCR
    const { data } = await recognize(uploadPath, "eng");
    const text = data.text;

    // Regex Parse
    const mcqRegex =
        /(.+?)\?\s*A\.\s*(.+?)\s*B\.\s*(.+?)\s*C\.\s*(.+?)\s*D\.\s*(.+?)(?:\s*correctAnswer[:=]?\s*(\w))?/g;

    const results = [];
    let match;
    while ((match = mcqRegex.exec(text)) !== null) {
        const [_, question, a, b, c, d, correct] = match;

        results.push({
            question: question.trim(),
            options: [a.trim(), b.trim(), c.trim(), d.trim()],
            correctAnswer: correct?.trim() || "",
            category: "General Knowledge",
            topic: "OCR Upload",
        });
    }

    return { parsed: results };
}
