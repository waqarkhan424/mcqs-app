import type { Ministry } from "./types";

export const commerce: Ministry = {
    name: "Ministry of Commerce",
    slug: "commerce",
    departments: [
        {
            name: "Trade Development Authority of Pakistan (TDAP)",
            slug: "tdap",
            type: "Authority",
            posts: [
                { bs: "22", postName: "Chief Executive", qualification: "Master’s degree; CSS (Trade) Group", ageLimit: "35–55" },
                { bs: "20", postName: "Additional Chief Executive", qualification: "Master’s degree; 5 yrs exp", ageLimit: "30–50" },
                { bs: "19", postName: "Director (Marketing & Promotion)", qualification: "Master’s degree", ageLimit: "30–50" },
                { bs: "18", postName: "Deputy Director (Administration)", qualification: "Bachelor’s degree; 2 yrs exp", ageLimit: "25–45" },
                { bs: "17", postName: "Assistant Director (Public Relations)", qualification: "Bachelor’s degree; 2 yrs exp", ageLimit: "25–35" },
                { bs: "16", postName: "Marketing Officer", qualification: "Bachelor’s degree in Business", ageLimit: "21–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; typing 40 wpm", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–30" },
                { bs: "04", postName: "Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Pakistan Institute of Trade and Development (PITAD)",
            slug: "pitad",
            type: "Institute",
            posts: [
                { bs: "21", postName: "Director General", qualification: "Master’s degree (International Trade)", ageLimit: "35–55" },
                { bs: "19", postName: "Director (Research & Training)", qualification: "Master’s degree", ageLimit: "30–50" },
                { bs: "18", postName: "Deputy Director (Administration)", qualification: "Bachelor’s degree; 2 yrs exp", ageLimit: "25–45" },
                { bs: "17", postName: "Assistant Director (Evaluation)", qualification: "Bachelor’s degree; 2 yrs exp", ageLimit: "25–35" },
                { bs: "16", postName: "Training Officer", qualification: "Bachelor’s degree", ageLimit: "21–30" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–30" },
                { bs: "04", postName: "Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
        {
            name: "Directorate General of Trade Organizations (DGTO)",
            slug: "dgto",
            type: "Directorate",
            posts: [
                { bs: "20", postName: "Director General", qualification: "Master’s degree; 5 yrs exp", ageLimit: "35–55" },
                { bs: "18", postName: "Deputy Director (Regulation)", qualification: "Bachelor’s degree; 2 yrs exp", ageLimit: "25–45" },
                { bs: "17", postName: "Section Officer (Administration)", qualification: "Bachelor’s degree; 2 yrs exp", ageLimit: "25–35" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate + shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "11", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; typing 40 wpm", ageLimit: "18–30" },
                { bs: "09", postName: "Lower Division Clerk (LDC)", qualification: "Matric; typing 30 wpm", ageLimit: "18–30" },
                { bs: "04", postName: "Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
            ],
        },
    ],
};
