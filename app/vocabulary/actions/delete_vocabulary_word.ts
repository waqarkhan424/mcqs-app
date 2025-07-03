// "use server";

// import prisma from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// export async function delete_vocabulary_word(id: string, topic: string) {
//     try {
//         await prisma.vocabulary.delete({
//             where: { id },
//         });

//         revalidatePath(`/vocabulary/${topic}`);
//         return { success: true };
//     } catch (error) {
//         console.error("Delete failed:", error);
//         return { success: false, error: "Failed to delete" };
//     }
// }
