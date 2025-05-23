import type { Ministry } from "./types";

export const itTelecom: Ministry = {
    name: "Ministry of Information Technology & Telecommunication",
    slug: "it-telecom",
    departments: [
        {
            name: "National IT Board (NITB)",
            slug: "nitb",
            type: "Board",
            posts: [
                { bs: "05", postName: "Naib Qasid / Chowkidar", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "07", postName: "Driver", qualification: "Primary pass; valid driving licence", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; basic computer skills", ageLimit: "18–30" },
                { bs: "12", postName: "IT Support Technician", qualification: "Diploma/Associate Degree in IT", ageLimit: "21–30" },
                { bs: "13", postName: "Web Developer", qualification: "Bachelor’s in Computer Science", ageLimit: "21–30" },
                { bs: "14", postName: "Systems Administrator", qualification: "Bachelor’s in IT/CS", ageLimit: "22–32" },
                { bs: "15", postName: "Network Engineer", qualification: "Bachelor’s in Electronics/Telecom", ageLimit: "23–35" },
                { bs: "16", postName: "Software Engineer", qualification: "Bachelor’s/Master’s in CS/IT", ageLimit: "25–35" },
                { bs: "17", postName: "Senior Software Engineer", qualification: "Master’s + 2 yrs experience", ageLimit: "28–40" },
                { bs: "18", postName: "Deputy Director (IT Projects)", qualification: "Master’s in IT/Project Management", ageLimit: "30–45" },
                { bs: "19", postName: "Director (Technology)", qualification: "Senior service grade", ageLimit: "35–50" },
                { bs: "20", postName: "Chair IT Policy Committee", qualification: "Federal Secretariat grade", ageLimit: "40–60" },
                { bs: "21", postName: "Additional Federal Secretary (IT)", qualification: "Head of cadre", ageLimit: "45–65" },
                { bs: "22", postName: "Federal Secretary, IT & Telecom", qualification: "Head of service", ageLimit: "50–65" },
            ],
        },
        {
            name: "Pakistan Software Export Board (PSEB)",
            slug: "pseb",
            type: "Board",
            posts: [
                { bs: "05", postName: "Peon / Sweeper", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "07", postName: "Driver", qualification: "Primary pass; valid licence", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "UDC / Data Entry Operator", qualification: "Intermediate; basic IT skills", ageLimit: "18–30" },
                { bs: "12", postName: "Export Documentation Officer", qualification: "Bachelor’s in Business / Supply Chain", ageLimit: "21–30" },
                { bs: "13", postName: "Market Analyst", qualification: "Bachelor’s/Master’s in Economics/Business", ageLimit: "21–30" },
                { bs: "14", postName: "IT Consultant", qualification: "Bachelor’s in CS/IT", ageLimit: "22–35" },
                { bs: "15", postName: "Assistant Manager (Exports)", qualification: "Master’s in Business/International Trade", ageLimit: "25–35" },
                { bs: "16", postName: "Manager (Software Exports)", qualification: "Master’s + experience", ageLimit: "28–40" },
                { bs: "17", postName: "Deputy Director", qualification: "Master’s + 2 yrs experience", ageLimit: "30–45" },
                { bs: "18", postName: "Director", qualification: "Senior service grade", ageLimit: "35–55" },
                { bs: "19", postName: "Additional Director General", qualification: "Head of organization", ageLimit: "40–60" },
                { bs: "20", postName: "Joint Secretary (PSEB)", qualification: "Federal Secretariat grade", ageLimit: "45–65" },
                { bs: "21", postName: "Additional Federal Secretary", qualification: "Head of cadre", ageLimit: "50–65" },
                { bs: "22", postName: "Federal Secretary, IT & Telecom", qualification: "Head of service", ageLimit: "50–65" },
            ],
        },
        {
            name: "Pakistan Telecommunication Authority (PTA)",
            slug: "pta",
            type: "Authority",
            posts: [
                { bs: "05", postName: "Chowkidar / Peon", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "07", postName: "Driver", qualification: "Primary pass; valid licence", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Intermediate; typing 30 wpm", ageLimit: "18–30" },
                { bs: "11", postName: "UDC / Radio Technician", qualification: "Intermediate; electronics diploma", ageLimit: "18–30" },
                { bs: "12", postName: "Spectrum Analyst", qualification: "Bachelor’s in Electronics/Telecom", ageLimit: "21–30" },
                { bs: "13", postName: "Compliance Officer", qualification: "Bachelor’s in Law/Business", ageLimit: "21–30" },
                { bs: "14", postName: "Network Operations Officer", qualification: "Bachelor’s in CS/IT", ageLimit: "22–35" },
                { bs: "15", postName: "Assistant Director (Regulation)", qualification: "Master’s in Telecommunications/Public Policy", ageLimit: "25–35" },
                { bs: "16", postName: "Director (Regulation)", qualification: "Master’s + experience", ageLimit: "28–45" },
                { bs: "17", postName: "Deputy Director General", qualification: "Senior service grade", ageLimit: "30–50" },
                { bs: "18", postName: "Additional Director General", qualification: "Head of authority", ageLimit: "35–55" },
                { bs: "19", postName: "Member PTA", qualification: "Federal Secretariat grade", ageLimit: "40–60" },
                { bs: "20", postName: "Chairman PTA", qualification: "Head of authority", ageLimit: "45–65" },
                { bs: "21", postName: "Additional Federal Secretary (IT)", qualification: "Head of cadre", ageLimit: "50–65" },
                { bs: "22", postName: "Federal Secretary, IT & Telecom", qualification: "Head of service", ageLimit: "50–65" },
            ],
        },
    ],
};