import type { Ministry } from "./types";

export const interior: Ministry = {
    name: "Ministry of Interior",
    slug: "interior",
    departments: [
        {
            name: "Federal Investigation Agency (FIA)",
            slug: "fia",
            type: "Department",
            posts: [
                { bs: "01", postName: "Naib Qasid, Chowkidar, Sweeper", qualification: "Primary pass", ageLimit: "18–30 (incl. 5 yr relaxation)" },
                { bs: "04", postName: "Driver / Staff Car Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "04", postName: "Dispatch Rider", qualification: "Primary pass; motorcycle licence", ageLimit: "18–30" },
                { bs: "05", postName: "Constable", qualification: "Matric (≥50 % marks)", ageLimit: "18–30" },
                { bs: "05", postName: "Constable Driver", qualification: "Matric; LTV licence", ageLimit: "18–30" },
                { bs: "07", postName: "Head Constable", qualification: "Intermediate (FA/FSc)", ageLimit: "18–30" },
                { bs: "07", postName: "Driver Head Constable", qualification: "Intermediate; LTV licence", ageLimit: "18–30" },
                { bs: "09", postName: "Assistant Sub‑Inspector (ASI)", qualification: "Intermediate (FA/FSc)", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; NITB IT course (post‑selection)", ageLimit: "18–30" },
                { bs: "14", postName: "Sub‑Inspector Investigation (SI)", qualification: "Bachelor’s (2nd Class / Grade C)", ageLimit: "18–30" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s (2nd Class / Grade C)", ageLimit: "18–33" },
                { bs: "16", postName: "Inspector Investigation", qualification: "Bachelor’s (2nd Class / Grade C)", ageLimit: "20–33" },
                { bs: "17", postName: "Assistant Director Investigation", qualification: "Master’s (2nd Class / Grade C)", ageLimit: "22–33" },
                { bs: "17", postName: "Assistant Director Legal", qualification: "LLB + 2 yrs post‑LLB experience", ageLimit: "22–35" },
                { bs: "18", postName: "Deputy Director", qualification: "Master’s degree", ageLimit: "25–35" },
            ],
        },



        { name: "National Database and Registration Authority (NADRA)", slug: "nadra", type: "Authority", posts: [] },
        { name: "Directorate General of Immigration & Passports (DGIP)", slug: "dgip", type: "Directorate", posts: [] },
        { name: "Islamabad Capital Territory (ICT) Police", slug: "ict-police", type: "Department", posts: [] },
        { name: "Pakistan Rangers (Punjab & Sindh)", slug: "pakistan-rangers", type: "Force", posts: [] },
        { name: "Frontier Corps (FC) KP and Balochistan", slug: "frontier-corps", type: "Force", posts: [] },
        { name: "Anti-Narcotics Force (ANF)", slug: "anf", type: "Force", posts: [] },
        { name: "National Counter Terrorism Authority (NACTA)", slug: "nacta", type: "Authority", posts: [] },
        { name: "Directorate General Civil Defence", slug: "civil-defence", type: "Directorate", posts: [] },
        { name: "Frontier Constabulary", slug: "frontier-constabulary", type: "Force", posts: [] },
        { name: "Pakistan Coast Guards", slug: "coast-guards", type: "Force", posts: [] },
        { name: "Gilgit-Baltistan Scouts", slug: "gb-scouts", type: "Force", posts: [] },
        { name: "Chitral Scouts", slug: "chitral-scouts", type: "Force", posts: [] },
        { name: "Exit Control List (ECL) Wing", slug: "ecl", type: "Wing", posts: [] },
        { name: "National Police Bureau (NPB)", slug: "npb", type: "Bureau", posts: [] },
        { name: "National Police Academy", slug: "police-academy", type: "Academy", posts: [] },
        { name: "National Academy for Prisons Administration (NAPA)", slug: "napa", type: "Academy", posts: [] },


    ],
};
