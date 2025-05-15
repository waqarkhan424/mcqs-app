import type { Ministry } from "./types";

export const foreignAffairs: Ministry = {
    name: "Ministry of Foreign Affairs",
    slug: "foreign-affairs",
    departments: [
        {
            name: "Diplomatic Missions",
            slug: "diplomatic-missions",
            type: "Division",
            posts: [
                { bs: "05", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "07", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; computer literacy", ageLimit: "18–30" },
                { bs: "09", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "11", postName: "Interpreter Grade-I", qualification: "Bachelor’s in Languages", ageLimit: "18–30" },
                { bs: "16", postName: "Protocol Assistant", qualification: "Bachelor’s degree", ageLimit: "18–30" },
                { bs: "17", postName: "Assistant Protocol Officer", qualification: "Master’s / 18 years’ education", ageLimit: "22–35" },
                { bs: "18", postName: "Protocol Officer", qualification: "Master’s degree", ageLimit: "25–35" },
                { bs: "19", postName: "Counsellor", qualification: "Master’s + relevant experience", ageLimit: "28–40" },
                { bs: "20", postName: "Minister", qualification: "Master’s + senior service", ageLimit: "30–45" },
                { bs: "21", postName: "Deputy Head of Mission", qualification: "Senior Foreign Service officer", ageLimit: "35–50" },
                { bs: "22", postName: "Ambassador / High Commissioner", qualification: "Top Foreign Service grade", ageLimit: "40–60" },
            ],
        },
        {
            name: "Foreign Service Academy",
            slug: "foreign-service-academy",
            type: "Academy",
            posts: [
                { bs: "05", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; computer literacy", ageLimit: "18–30" },
                { bs: "16", postName: "Research Assistant", qualification: "Master’s / 18 years’ education", ageLimit: "22–35" },
                { bs: "17", postName: "Assistant Director (Training)", qualification: "Master’s + training experience", ageLimit: "25–35" },
                { bs: "18", postName: "Deputy Director (Training)", qualification: "Master’s + senior experience", ageLimit: "28–40" },
                { bs: "19", postName: "Director (Training)", qualification: "Senior Service record", ageLimit: "30–50" },
                { bs: "20", postName: "Principal Director", qualification: "Top training officer", ageLimit: "35–55" },
                { bs: "21", postName: "Rector (Head of Academy)", qualification: "Foreign Secretary grade", ageLimit: "40–60" },
            ],
        },
        {
            name: "United Nations Division",
            slug: "un-division",
            type: "Division",
            posts: [
                { bs: "09", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; computer literacy", ageLimit: "18–30" },
                { bs: "17", postName: "Section Officer", qualification: "Master’s / 18 years’ education", ageLimit: "22–35" },
                { bs: "18", postName: "Deputy Director", qualification: "Master’s + relevant experience", ageLimit: "25–40" },
                { bs: "19", postName: "Director", qualification: "Senior Service officer", ageLimit: "30–50" },
                { bs: "20", postName: "Joint Secretary (United Nations)", qualification: "Foreign Service grade", ageLimit: "35–55" },
                { bs: "21", postName: "Additional Foreign Secretary (UN Affairs)", qualification: "Top Foreign Service officer", ageLimit: "40–60" },
                { bs: "22", postName: "Foreign Secretary (Ex-officio for UN)", qualification: "Head of service", ageLimit: "45–65" },
            ],
        },
    ],
};
