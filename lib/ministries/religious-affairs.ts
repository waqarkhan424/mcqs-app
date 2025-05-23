import type { Ministry } from "./types";

export const religiousAffairs: Ministry = {
    name: "Ministry of Religious Affairs & Inter-faith Harmony",
    slug: "religious-affairs",
    departments: [
        {
            name: "Hajj Directorate",
            slug: "hajj-directorate",
            type: "Directorate",
            posts: [
                { bs: "05", postName: "Naib Qasid / Chowkidar", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "07", postName: "Driver", qualification: "Primary pass; valid driving licence", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; computer literacy", ageLimit: "18–30" },
                { bs: "12", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "13", postName: "Accounts Assistant", qualification: "Intermediate; basic accounting", ageLimit: "18–30" },
                { bs: "14", postName: "Hajj Coordinator", qualification: "Bachelor’s in Public Admin/Islamic Studies", ageLimit: "22–35" },
                { bs: "15", postName: "Superintendent (Hajj)", qualification: "Bachelor’s + 2 yrs experience", ageLimit: "25–40" },
                { bs: "16", postName: "Assistant Director (Hajj Operations)", qualification: "Master’s in Management/Islamic Studies", ageLimit: "28–45" },
                { bs: "17", postName: "Deputy Director (Hajj Planning)", qualification: "Master’s + 2 yrs experience", ageLimit: "30–50" },
                { bs: "18", postName: "Director (Hajj)", qualification: "Senior service grade", ageLimit: "35–55" },
                { bs: "19", postName: "Additional Secretary (Hajj)", qualification: "Federal Secretariat grade", ageLimit: "40–60" },
                { bs: "20", postName: "Joint Secretary (Religious Affairs)", qualification: "Head of cadre", ageLimit: "45–65" },
                { bs: "21", postName: "Additional Federal Secretary", qualification: "Head of service", ageLimit: "50–65" },
                { bs: "22", postName: "Federal Secretary, Religious Affairs & Inter-faith Harmony", qualification: "Head of service", ageLimit: "55–65" },
            ],
        },
        {
            name: "Interfaith Harmony Wing",
            slug: "interfaith-harmony",
            type: "Wing",
            posts: [
                { bs: "05", postName: "Peon / Sweeper", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "07", postName: "Driver", qualification: "Primary pass; licence", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "UDC / Data Entry Operator", qualification: "Intermediate; computer literacy", ageLimit: "18–30" },
                { bs: "12", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "13", postName: "Research Assistant", qualification: "Bachelor’s in Social Sciences/Religious Studies", ageLimit: "22–35" },
                { bs: "14", postName: "Program Officer", qualification: "Master’s in Interfaith Studies/Peace Studies", ageLimit: "25–40" },
                { bs: "15", postName: "Deputy Director (Interfaith)", qualification: "Master’s + 2 yrs experience", ageLimit: "28–50" },
                { bs: "17", postName: "Director (Interfaith Harmony)", qualification: "Senior service grade", ageLimit: "35–55" },
                { bs: "19", postName: "Joint Secretary (Harmony Wing)", qualification: "Head of cadre", ageLimit: "40–65" },
                { bs: "22", postName: "Federal Secretary, Religious Affairs & Inter-faith Harmony", qualification: "Head of service", ageLimit: "55–65" },
            ],
        },
        {
            name: "Evacuee Trust Property Board",
            slug: "evacuee-trust",
            type: "Board",
            posts: [
                { bs: "05", postName: "Naib Qasid / Chowkidar", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "07", postName: "Driver", qualification: "Primary pass; licence", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "UDC / Data Entry Operator", qualification: "Intermediate; computer literacy", ageLimit: "18–30" },
                { bs: "12", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "13", postName: "Property Assistant", qualification: "Bachelor’s in Public Admin/Real Estate", ageLimit: "22–35" },
                { bs: "14", postName: "Legal Officer", qualification: "LLB", ageLimit: "25–45" },
                { bs: "15", postName: "Superintendent (Board)", qualification: "Bachelor’s + experience", ageLimit: "28–50" },
                { bs: "17", postName: "Director (Trust Property)", qualification: "Senior service grade", ageLimit: "35–60" },
                { bs: "19", postName: "Joint Secretary (Evacuee Trust)", qualification: "Head of cadre", ageLimit: "40–65" },
                { bs: "22", postName: "Federal Secretary, Religious Affairs & Inter-faith Harmony", qualification: "Head of service", ageLimit: "55–65" },
            ],
        },
    ],
};