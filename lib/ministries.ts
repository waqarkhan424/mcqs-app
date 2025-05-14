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
                        ageLimit: "18–25",
                    },
                    {
                        bs: "04",
                        postName: "Driver / Staff Car Driver (LTV licence)",
                        qualification: "Primary pass; valid LTV licence",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "05",
                        postName: "Dispatch Rider; Constable Driver",
                        qualification: "Matric (2nd Class); valid motorcycle licence",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "07",
                        postName: "Constable",
                        qualification: "Matric with at least 50% marks",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "09",
                        postName: "Lower Division Clerk (LDC)",
                        qualification: "Matric; typing speed 30 W.P.M.",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "11",
                        postName: "Upper Division Clerk (UDC)",
                        qualification: "Intermediate",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "14",
                        postName: "Sub-Inspector Investigation (SI)",
                        qualification: "Bachelor’s (2nd Class/Grade C)",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "14",
                        postName: "Stenotypist",
                        qualification: "Intermediate + shorthand & 40 W.P.M. typing",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "15",
                        postName: "Assistant",
                        qualification: "Bachelor’s (2nd Class/Grade C)",
                        ageLimit: "18–28",
                    },
                    {
                        bs: "16",
                        postName: "Inspector Investigation",
                        qualification: "Bachelor’s (2nd Class/Grade C)",
                        ageLimit: "20–28 (plus 5 years general relaxation)",
                    },
                    {
                        bs: "17",
                        postName: "Assistant Director Investigation",
                        qualification: "Master’s (2nd Class/Grade C)",
                        ageLimit: "22–28 (plus 5 yrs relaxation)",
                    },
                    {
                        bs: "17",
                        postName: "Assistant Director Legal",
                        qualification: "LLB + 2 yrs post-LLB experience",
                        ageLimit: "22–30 (plus 5 yrs relaxation)",
                    },
                    {
                        bs: "18",
                        postName: "Deputy Director",
                        qualification: "Master’s degree",
                        ageLimit: "25–33",
                    },
                ],
            },
        ],
    },
]
