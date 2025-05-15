import type { Ministry } from "./types";

export const energy: Ministry = {
    name: "Ministry of Energy",
    slug: "energy",
    departments: [
        {
            name: "Power Division",
            slug: "power-division",
            type: "Division",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Petroleum Division",
            slug: "petroleum-division",
            type: "Division",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Alternative Energy Development Board (AEDB)",
            slug: "aedb",
            type: "Board",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Hydrocarbon Development Institute of Pakistan (HDIP)",
            slug: "hdip",
            type: "Institute",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
    ],
};
