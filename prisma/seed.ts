// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import mcqs from '../data/parsed_mcqs.json'

const prisma = new PrismaClient()

async function main() {
    for (const q of mcqs) {
        await prisma.question.create({ data: q })
    }
    console.log("✅ All MCQs inserted.")
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect())
