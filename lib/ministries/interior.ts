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




        {
            name: "National Database and Registration Authority (NADRA)",
            slug: "nadra",
            type: "Authority",
            posts: [
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–30" },
                { bs: "01", postName: "Chowkidar", qualification: "Primary pass", ageLimit: "18–30" },
                { bs: "01", postName: "Sweeper", qualification: "Primary pass", ageLimit: "18–30" },
                { bs: "04", postName: "Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "04", postName: "Dispatch Rider", qualification: "Primary pass; motorcycle licence", ageLimit: "18–30" },
                { bs: "11", postName: "Junior Executive (Data Entry Operator)", qualification: "Intermediate", ageLimit: "18–30" },
                { bs: "11", postName: "Data Entry Operator", qualification: "Intermediate", ageLimit: "18–30" },
                { bs: "13", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; typing 40 wpm", ageLimit: "18–30" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s (2nd Class)", ageLimit: "22–35" },
                { bs: "17", postName: "Assistant Director", qualification: "Bachelor’s degree", ageLimit: "22–35" },
                { bs: "18", postName: "Deputy Director", qualification: "Master’s degree", ageLimit: "25–35" },
            ],
        },



        {
            name: "Directorate General of Immigration & Passports (DGIP)",
            slug: "dgip",
            type: "Directorate",
            posts: [
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "01", postName: "Sweeper", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "01", postName: "Chowkidar", qualification: "Primary pass", ageLimit: "18–25" },
                { bs: "04", postName: "Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "04", postName: "Dispatch Rider", qualification: "Primary pass; motorcycle licence", ageLimit: "18–30" },
                { bs: "11", postName: "Telex Operator", qualification: "Intermediate", ageLimit: "18–30" },
                { bs: "11", postName: "Call Centre Agent", qualification: "Intermediate", ageLimit: "18–30" },
                { bs: "11", postName: "Data Entry Operator", qualification: "Intermediate", ageLimit: "18–30" },
                { bs: "12", postName: "Printing Staff", qualification: "Matric", ageLimit: "18–30" },
                { bs: "13", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; typing 40 wpm", ageLimit: "18–30" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "14", postName: "Assistant", qualification: "Bachelor’s (2nd Class)", ageLimit: "22–35" },
                { bs: "17", postName: "Assistant Director", qualification: "Bachelor’s degree", ageLimit: "22–35" },
            ],
        },

        {
            name: "Islamabad Capital Territory (ICT) Police",
            slug: "ict-police",
            type: "Department",
            posts: [
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "18–26" },
                { bs: "04", postName: "Driver", qualification: "Primary pass; valid LTV licence", ageLimit: "18–30" },
                { bs: "05", postName: "Constable", qualification: "Matric", ageLimit: "18–26" },
                { bs: "07", postName: "Head Constable", qualification: "Matric", ageLimit: "18–30" },
                { bs: "09", postName: "Assistant Sub‑Inspector (ASI)", qualification: "Intermediate", ageLimit: "18–30" },
                { bs: "14", postName: "Sub‑Inspector (SI)", qualification: "Bachelor’s (2nd Class)", ageLimit: "20–28" },
                { bs: "16", postName: "Inspector of Police", qualification: "Bachelor’s (2nd Class)", ageLimit: "22–30" },
                { bs: "17", postName: "ASP/DSP", qualification: "Bachelor’s degree", ageLimit: "21–28" },
                { bs: "18", postName: "Superintendent of Police (SP)", qualification: "Bachelor’s; Master’s preferred", ageLimit: "25–35" },
                { bs: "19", postName: "Senior Superintendent of Police (SSP)", qualification: "Master’s degree", ageLimit: "30–40" },
                { bs: "20", postName: "Deputy Inspector General of Police (DIG)", qualification: "Master’s degree", ageLimit: "30–45" },
                { bs: "21", postName: "Additional Inspector General of Police (Addl. IG)", qualification: "Master’s degree", ageLimit: "35–50" },
                { bs: "22", postName: "Inspector General of Police (IGP)", qualification: "Master’s degree", ageLimit: "35–55" },
            ],
        },

        {
            name: "Anti-Narcotics Force (ANF)",
            slug: "anf",
            type: "Force",
            posts: [
                { bs: "01", postName: "Naib Qasid", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "01", postName: "Chowkidar", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "01", postName: "Sweeper", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "01", postName: "Helper", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "01", postName: "Cook", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "01", postName: "Mali", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "01", postName: "Khakrob", qualification: "Primary pass", ageLimit: "25–35" },
                { bs: "04", postName: "Staff Car Driver", qualification: "Matric; valid LTV licence", ageLimit: "25–35" },
                { bs: "04", postName: "Dispatch Rider", qualification: "Matric; motorcycle licence", ageLimit: "25–35" },
                { bs: "04", postName: "Photostat Machine Operator", qualification: "Matric", ageLimit: "25–35" },
                { bs: "07", postName: "Plumber", qualification: "Matric; relevant trade certificate", ageLimit: "25–35" },
                { bs: "07", postName: "Electrician", qualification: "Matric; relevant trade certificate", ageLimit: "25–35" },
                { bs: "07", postName: "Carpenter", qualification: "Matric; relevant trade certificate", ageLimit: "25–35" },
                { bs: "07", postName: "Mason", qualification: "Matric; relevant trade certificate", ageLimit: "25–35" },
                { bs: "09", postName: "Assistant Sub-Inspector (ASI)", qualification: "Intermediate (FA/FSc)", ageLimit: "18–30" },
                { bs: "11", postName: "Auditor", qualification: "Bachelor’s degree (Commerce)", ageLimit: "22–35" },
                { bs: "13", postName: "Upper Division Clerk (UDC)", qualification: "Intermediate; typing 40 wpm", ageLimit: "18–30" },
                { bs: "14", postName: "Sub-Inspector (SI)", qualification: "Bachelor’s (2nd Class)", ageLimit: "20–30" },
                { bs: "14", postName: "Stenotypist", qualification: "Intermediate; shorthand & 40 wpm typing", ageLimit: "18–30" },
                { bs: "15", postName: "Assistant", qualification: "Bachelor’s (2nd Class)", ageLimit: "22–35" },
                { bs: "16", postName: "Inspector", qualification: "Bachelor’s (2nd Class)", ageLimit: "22–35" },
                { bs: "17", postName: "Assistant Director (Enforcement)", qualification: "Master’s (2nd Class)", ageLimit: "25–35" },
                { bs: "18", postName: "Deputy Director", qualification: "Master’s degree", ageLimit: "25–35" },
            ],
        },


        {
            name: "National Counter Terrorism Authority (NACTA)",
            slug: "nacta",
            type: "Authority",
            posts: [

                // Technical Branch
                { bs: "19", postName: "Senior Data Scientist (Technical Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–45" },
                { bs: "18", postName: "Data Scientist (Technical Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–40" },
                { bs: "17", postName: "Junior Data Scientist (Technical Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
                { bs: "17", postName: "Technical Officer (Technical Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
                { bs: "17", postName: "Cyber Security Expert (Technical Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
                { bs: "17", postName: "System Administrator (Technical Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },

                // Counter Terrorism Branch
                { bs: "19", postName: "Senior Analyst (Counter Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–45" },
                { bs: "18", postName: "Analyst (Counter Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–40" },
                { bs: "17", postName: "Junior Analyst (Counter Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
                { bs: "17", postName: "Linguist (Counter Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },

                // Counter Financing of Terrorism Branch
                { bs: "19", postName: "Senior Analyst (Counter Financing of Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–45" },
                { bs: "18", postName: "Analyst (Counter Financing of Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–40" },
                { bs: "17", postName: "Junior Analyst (Counter Financing of Terrorism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },

                // Counter Violent Extremism Branch
                { bs: "19", postName: "Senior Analyst (Counter Violent Extremism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–45" },
                { bs: "18", postName: "Analyst (Counter Violent Extremism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–40" },
                { bs: "17", postName: "Junior Analyst (Counter Violent Extremism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
                { bs: "17", postName: "Linguist (Counter Violent Extremism Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },

                // Intelligence Wing
                { bs: "19", postName: "Senior Analyst (Intelligence Wing)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–45" },
                { bs: "18", postName: "Analyst (Intelligence Wing)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–40" },
                { bs: "17", postName: "Junior Analyst (Intelligence Wing)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
                { bs: "17", postName: "Linguist (Intelligence Wing)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },

                // Communication & Outreach Branch
                { bs: "19", postName: "Senior Analyst (Communication & Outreach Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–45" },
                { bs: "18", postName: "Analyst (Communication & Outreach Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–40" },
                { bs: "17", postName: "Junior Analyst (Communication & Outreach Branch)", qualification: "16 years of education (Bachelor’s degree)", ageLimit: "18–35" },
            ],
        },




    ],
};
