// "use server";

// import prisma from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// export async function update_vocabulary_word(data: { id: string; word: string; definition: string; urduMeaning?: string; example?: string; topic: string; }) {

//     try {
//         await prisma.vocabulary.update({
//             where: { id: data.id },
//             data: {
//                 word: data.word,
//                 definition: data.definition,
//                 urduMeaning: data.urduMeaning || "",
//                 example: data.example || "",
//             },
//         });

//         revalidatePath(`/vocabulary/${data.topic}`);
//         return { success: true };
//     } catch (error) {
//         console.error("Edit failed:", error);
//         return { success: false, error: "Failed to update" };
//     }
// }
