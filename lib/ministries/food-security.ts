import type { Ministry } from "./types";

export const foodSecurity: Ministry = {
    name: "Ministry of National Food Security & Research",
    slug: "food-security",
    departments: [
        {
            name: "Pakistan Agricultural Research Council (PARC)",
            slug: "parc",
            type: "Council",
            posts: [
                {
                    bs: "18",
                    postName: "Scientific Officer",
                    qualification: "M.Sc (Hons) / M.Phil in relevant discipline",
                    ageLimit: "32 years"
                },
                {
                    bs: "17",
                    postName: "Assistant Scientific Officer",
                    qualification: "B.Sc (Hons) / DVM or equivalent qualification",
                    ageLimit: "30 years"
                },
                {
                    bs: "17",
                    postName: "Principal Scientific Assistant",
                    qualification: "Matric with 2-year diploma in agricultural sciences and 22 years' experience",
                    ageLimit: "50 years"
                },
            ],
        },
        {
            name: "Department of Plant Protection (DPP)",
            slug: "dpp",
            type: "Department",
            posts: [
                {
                    bs: "17",
                    postName: "Entomologist",
                    qualification: "B.Sc (Hons) in Agriculture/Entomology/Plant Pathology",
                    ageLimit: "30 years (incl. 5 yr relaxation)"
                },
                {
                    bs: "18",
                    postName: "Deputy Director (IPM)",
                    qualification: "M.Sc in Agriculture or related subject",
                    ageLimit: "35 years"
                },
                {
                    bs: "17",
                    postName: "Agriculture Officer (IPM)",
                    qualification: "16 years education in relevant discipline",
                    ageLimit: "30 years"
                },
            ],
        },
        {
            name: "Federal Seed Certification & Registration Department",
            slug: "federal-seed-certification",
            type: "Department",
            posts: [
                {
                    bs: "14",
                    postName: "Stenotypist",
                    qualification: "Intermediate",
                    ageLimit: "30 years"
                },
                {
                    bs: "11",
                    postName: "Laboratory Technician",
                    qualification: "Matric + Diploma in relevant field",
                    ageLimit: "30 years"
                },
                {
                    bs: "09",
                    postName: "Lower Division Clerk (LDC)",
                    qualification: "Intermediate; typing 30 wpm",
                    ageLimit: "30 years"
                },
            ],
        },
        {
            name: "Pakistan Oilseed Development Board (PODB)",
            slug: "podb",
            type: "Board",
            posts: [
                {
                    bs: "17",
                    postName: "Scientific Officer",
                    qualification: "M.Sc (Hons) in relevant discipline",
                    ageLimit: "35 years"
                },
                {
                    bs: "17",
                    postName: "Software Engineer",
                    qualification: "Bachelor’s in Computer Science or Software Engineering",
                    ageLimit: "30 years"
                },
                {
                    bs: "17",
                    postName: "MIS Expert",
                    qualification: "Bachelor’s in IT/Computer Science",
                    ageLimit: "30 years"
                },
            ],
        },
    ],
};
