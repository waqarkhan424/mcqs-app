// // scripts/seedGrammar.
// //@ts-nocheck
// import React from "react";
// import { PrismaClient } from "@prisma/client";
// import ReactDOMServer from "react-dom/server";
// import slugify from "slugify";


// import * as basic from "../app/english/components/basic-grammar/index.tsx";
// import * as intermediate from "../app/english/components/intermediate-grammar/index.tsx";
// import * as advanced from "../app/english/components/advanced-grammar/index.tsx";


// const prisma = new PrismaClient();




// async function seedTopicsFromFolder(folder: Record<string, any>, level: string) {
//     for (const [key, Comp] of Object.entries(folder)) {
//         const element = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp.default));
//         const title = key.replace(/-content$/, "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
//         const slug = slugify(title, { lower: true });

//         await prisma.grammarTopic.upsert({
//             where: { slug },
//             update: {},
//             create: {
//                 slug,
//                 title,
//                 level,
//                 content: element,
//             },
//         });

//         console.log(`✅ Seeded: ${title}`);
//     }
// }

// async function main() {
//     await seedTopicsFromFolder(basic, "basic");
//     await seedTopicsFromFolder(intermediate, "intermediate");
//     await seedTopicsFromFolder(advanced, "advanced");

//     await prisma.$disconnect();
// }

// main().catch(e => {
//     console.error(e);
//     prisma.$disconnect();
// });


// scripts/seedGrammar.ts
//@ts-nocheck
import React from "react";
import { PrismaClient } from "@prisma/client";
import ReactDOMServer from "react-dom/server";
import slugify from "slugify";

const prisma = new PrismaClient();

async function seedTopicsFromFolder(
    folder: Record<string, any>,
    level: string
) {
    for (const [key, Comp] of Object.entries(folder)) {
        const element = ReactDOMServer.renderToStaticMarkup(
            React.createElement(Comp.default)
        );
        const title = key
            .replace(/-content$/, "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
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
    try {
        const basicModule = (await import(
            "../app/english/components/basic-grammar/index.tsx"
        )) as Record<string, any>;
        const intermediateModule = (await import(
            "../app/english/components/intermediate-grammar/index.tsx"
        )) as Record<string, any>;
        const advancedModule = (await import(
            "../app/english/components/advanced-grammar/index.tsx"
        )) as Record<string, any>;

        await seedTopicsFromFolder(basicModule, "basic");
        await seedTopicsFromFolder(intermediateModule, "intermediate");
        await seedTopicsFromFolder(advancedModule, "advanced");
    } catch (e) {
        console.error("❌ Error in seed script:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
