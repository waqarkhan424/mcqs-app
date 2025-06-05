//@ts-nocheck
import { ministries } from "../lib/ministries";
import prisma from "../lib/prisma";

async function seedMinistries() {
    try {
        for (const ministry of ministries) {
            // Check if ministry already exists
            const existing = await prisma.ministry.findUnique({
                where: { slug: ministry.slug },
            });

            if (existing) {
                console.log(`⏩ Skipped (already exists): ${ministry.name}`);
                continue;
            }

            // Create new ministry with departments
            const created = await prisma.ministry.create({
                data: {
                    name: ministry.name,
                    slug: ministry.slug,
                    departments: {
                        create: ministry.departments.map((department) => ({
                            name: department.name,
                            slug: department.slug,
                            type: department.type,
                        })),
                    },
                },
            });

            console.log(`✅ Inserted: ${created.name}`);
        }

        console.log("🎉 All ministries seeded successfully!");
    } catch (error) {
        console.error("❌ Error seeding ministries:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedMinistries();
