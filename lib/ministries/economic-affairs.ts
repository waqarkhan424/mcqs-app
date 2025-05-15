import type { Ministry } from "./types";

export const economicAffairs: Ministry = {
    name: "Ministry of Economic Affairs",
    slug: "economic-affairs",
    departments: [
        {
            name: "External Finance Wing",
            slug: "external-finance-wing",
            type: "Wing",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & typing (80/40 wpm)", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "04", postName: "Duplicating Machine Operator", qualification: "Matric; knowledge of duplicating machines", ageLimit: "18–25" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Debt Management Office",
            slug: "debt-management-office",
            type: "Office",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & typing (80/40 wpm)", ageLimit: "18–25" },
                { bs: "11", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "04", postName: "Duplicating Machine Operator", qualification: "Matric; knowledge of duplicating machines", ageLimit: "18–25" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Economic Affairs Division (EAD)",
            slug: "ead",
            type: "Division",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–28" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & typing (80/40 wpm)", ageLimit: "18–28" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–28" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–28" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–28" },
            ],
        },
    ],
};
