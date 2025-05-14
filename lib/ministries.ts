
export type Post = {
    bs: string
    postName: string
    qualification: string
    ageLimit: string
}

export type Department = {
    name: string
    slug: string
    type: string
    posts: Post[]
}

export type Ministry = {
    name: string
    slug: string
    departments: Department[]
}

export const ministries: Ministry[] = [

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        name: "Ministry of Interior",
        slug: "interior",
        departments: [
            {
                name: "Federal Investigation Agency (FIA)",
                slug: "fia",
                type: "Department",
                posts: [
                    {
                        bs: "01",
                        postName: "Naib Qasid, Chowkidar, Sweeper",
                        qualification: "Primary pass",
                        ageLimit: "18–30 (incl. 5 yr relaxation)",
                    },
                    {
                        bs: "04",
                        postName: "Driver / Staff Car Driver",
                        qualification: "Primary pass; valid LTV licence",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "04",
                        postName: "Dispatch Rider",
                        qualification: "Primary pass; motorcycle licence",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "05",
                        postName: "Constable",
                        qualification: "Matric (≥50 % marks)",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "05",
                        postName: "Constable Driver",
                        qualification: "Matric; LTV licence",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "07",
                        postName: "Head Constable",
                        qualification: "Intermediate (FA/FSc)",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "07",
                        postName: "Driver Head Constable",
                        qualification: "Intermediate; LTV licence",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "09",
                        postName: "Assistant Sub‑Inspector (ASI)",
                        qualification: "Intermediate (FA/FSc)",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "09",
                        postName: "Lower Division Clerk (LDC)",
                        qualification: "Matric; typing 30 wpm",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "11",
                        postName: "Upper Division Clerk (UDC)",
                        qualification: "Intermediate; NITB IT course (post‑selection)",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "14",
                        postName: "Sub‑Inspector Investigation (SI)",
                        qualification: "Bachelor’s (2nd Class / Grade C)",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "14",
                        postName: "Stenotypist",
                        qualification: "Intermediate + shorthand & 40 wpm typing",
                        ageLimit: "18–30",
                    },
                    {
                        bs: "15",
                        postName: "Assistant",
                        qualification: "Bachelor’s (2nd Class / Grade C)",
                        ageLimit: "18–33",
                    },
                    {
                        bs: "16",
                        postName: "Inspector Investigation",
                        qualification: "Bachelor’s (2nd Class / Grade C)",
                        ageLimit: "20–33",
                    },
                    {
                        bs: "17",
                        postName: "Assistant Director Investigation",
                        qualification: "Master’s (2nd Class / Grade C)",
                        ageLimit: "22–33",
                    },
                    {
                        bs: "17",
                        postName: "Assistant Director Legal",
                        qualification: "LLB + 2 yrs post‑LLB experience",
                        ageLimit: "22–35",
                    },
                    {
                        bs: "18",
                        postName: "Deputy Director",
                        qualification: "Master’s degree",
                        ageLimit: "25–35",
                    },
                ],
            },
        ],
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD just below the Interior ministry object
    {
        name: "Ministry of Defence",
        slug: "defence",
        departments: [],
    },
    {
        name: "Ministry of Finance & Revenue",
        slug: "finance",
        departments: [],
    },
    {
        name: "Ministry of Foreign Affairs",
        slug: "foreign-affairs",
        departments: [],
    },
    {
        name: "Ministry of Federal Education & Professional Training",
        slug: "federal-education",
        departments: [],
    },
    {
        name: "Ministry of Information & Broadcasting",
        slug: "information-broadcasting",
        departments: [],
    },
    {
        name: "Ministry of Information Technology & Telecommunication",
        slug: "it-telecom",
        departments: [],
    },
    {
        name: "Ministry of Climate Change",
        slug: "climate-change",
        departments: [],
    },
    {
        name: "Ministry of Commerce",
        slug: "commerce",
        departments: [],
    },
    {
        name: "Ministry of Communications",
        slug: "communications",
        departments: [],
    },
    {
        name: "Ministry of Defence Production",
        slug: "defence-production",
        departments: [],
    },
    {
        name: "Ministry of Economic Affairs",
        slug: "economic-affairs",
        departments: [],
    },
    {
        name: "Ministry of Energy",
        slug: "energy",
        departments: [],
    },
    {
        name: "Ministry of Housing & Works",
        slug: "housing-works",
        departments: [],
    },
    {
        name: "Ministry of Human Rights",
        slug: "human-rights",
        departments: [],
    },
    {
        name: "Ministry of Industries & Production",
        slug: "industries-production",
        departments: [],
    },
    {
        name: "Ministry of Kashmir Affairs & Gilgit-Baltistan",
        slug: "kashmir-gb",
        departments: [],
    },
    {
        name: "Ministry of Law & Justice",
        slug: "law-justice",
        departments: [],
    },
    {
        name: "Ministry of Maritime Affairs",
        slug: "maritime-affairs",
        departments: [],
    },
    {
        name: "Ministry of Narcotics Control",
        slug: "narcotics-control",
        departments: [],
    },
    {
        name: "Ministry of National Food Security & Research",
        slug: "food-security",
        departments: [],
    },
    {
        name: "Ministry of National Health Services, Regulations & Coordination",
        slug: "health-services",
        departments: [],
    },
    {
        name: "Ministry of Overseas Pakistanis & Human Resource Development",
        slug: "overseas-hrd",
        departments: [],
    },
    {
        name: "Ministry of Parliamentary Affairs",
        slug: "parliamentary-affairs",
        departments: [],
    },
    {
        name: "Ministry of Planning, Development & Special Initiatives",
        slug: "planning-development",
        departments: [],
    },
    {
        name: "Ministry of Privatisation",
        slug: "privatisation",
        departments: [],
    },
    {
        name: "Ministry of Railways",
        slug: "railways",
        departments: [],
    },
    {
        name: "Ministry of Religious Affairs & Inter‑faith Harmony",
        slug: "religious-affairs",
        departments: [],
    },
    {
        name: "Ministry of Science & Technology",
        slug: "science-tech",
        departments: [],
    },
    {
        name: "Ministry of States & Frontier Regions",
        slug: "safar",
        departments: [],
    },
    {
        name: "Ministry of Water Resources",
        slug: "water-resources",
        departments: [],
    },


]
