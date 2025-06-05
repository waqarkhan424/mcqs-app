// scripts/seedGrammar.
//@ts-nocheck
import React from "react";
import { PrismaClient } from "@prisma/client";
import ReactDOMServer from "react-dom/server";
import slugify from "slugify";
import * as basic from "../app/english/components/basic-grammar/index.ts";
import * as intermediate from "../app/english/components/intermediate-grammar/index.ts";
import * as advanced from "../app/english/components/advanced-grammar/index.ts";




const prisma = new PrismaClient();




async function seedTopicsFromFolder(folder: Record<string, any>, level: string) {
    for (const [key, Comp] of Object.entries(folder)) {
        const element = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp.default));
        const title = key.replace(/-content$/, "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        const slug = slugify(title, { lower: true });

        await prisma.grammarTopic.upsert({
            where: { slug },
            update: {},
            create: {
                slug,
                title,
                level,
                content: element,
            },
        });

        console.log(`✅ Seeded: ${title}`);
    }
}

async function main() {
    await seedTopicsFromFolder(basic, "basic");
    await seedTopicsFromFolder(intermediate, "intermediate");
    await seedTopicsFromFolder(advanced, "advanced");

    await prisma.$disconnect();
}

main().catch(e => {
    console.error(e);
    prisma.$disconnect();
});
