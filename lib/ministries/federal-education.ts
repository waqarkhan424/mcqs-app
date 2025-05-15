import type { Ministry } from "./types";

export const federalEducation: Ministry = {
    name: "Ministry of Federal Education & Professional Training",
    slug: "federal-education",
    departments: [
        {
            name: "Higher Education Commission (HEC)",
            slug: "hec",
            type: "Commission",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & typing (80/40 wpm)", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "National Vocational and Technical Training Commission (NAVTTC)",
            slug: "navttc",
            type: "Commission",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & typing (80/40 wpm)", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Federal Directorate of Education (FDE)",
            slug: "fde",
            type: "Directorate",
            posts: [
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s degree", ageLimit: "18–25" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & typing (80/40 wpm)", ageLimit: "18–25" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; Basic IT training (NITB)", ageLimit: "18–25" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Matric; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
    ],
};
