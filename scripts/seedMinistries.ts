// File: scripts/seedMinistries.ts

// Disable type‐checking because we'll import raw JSON‐like objects
// from ../lib/ministries/index.ts
// @ts-nocheck

import { ministries } from "../lib/ministries/index.ts";
import prisma from "../lib/prisma.ts";

async function seedMinistries() {
    try {
        for (const ministry of ministries) {
            // 1. Check if this ministry (by slug) already exists
            const existing = await prisma.ministry.findUnique({
                where: { slug: ministry.slug },
            });

            if (existing) {
                console.log(`⏩ Skipped (already exists): ${ministry.name}`);
                continue;
            }

            // 2. Create the ministry, with nested departments and posts
            const created = await prisma.ministry.create({
                data: {
                    name: ministry.name,
                    slug: ministry.slug,
                    departments: {
                        create: ministry.departments.map((department) => ({
                            name: department.name,
                            slug: department.slug,
                            type: department.type,
                            posts: {
                                create: department.posts.map((post) => ({
                                    bs: post.bs,
                                    postName: post.postName,
                                    qualification: post.qualification,
                                    ageLimit: post.ageLimit,
                                })),
                            },
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
