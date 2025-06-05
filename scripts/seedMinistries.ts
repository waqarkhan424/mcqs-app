// scripts/seedMinistries.ts
import { ministries } from "@/lib/ministries/ministries"; // update path if different


import prisma from "@/lib/prisma";

async function seedMinistries() {
    for (const ministry of ministries) {
        const created = await prisma.ministry.create({
            data: {
                name: ministry.name,
                slug: ministry.slug,
                departments: {
                    create: ministry.departments.map((d) => ({
                        name: d.name,
                        slug: d.slug,
                        type: d.type,
                    })),
                },
            },
        });

        console.log(`✅ Inserted: ${created.name}`);
    }

    console.log("🎉 All ministries seeded successfully!");
}

seedMinistries()
    .catch((error) => {
        console.error("❌ Error seeding ministries:", error);
    })
    .finally(() => {
        prisma.$disconnect();
    });
