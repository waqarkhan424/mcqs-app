import prisma from "@/lib/prisma";

export async function get_ministries() {
    return await prisma.ministry.findMany({
        include: {
            departments: {
                include: {
                    posts: true,
                },
            },
        },
    });
}
