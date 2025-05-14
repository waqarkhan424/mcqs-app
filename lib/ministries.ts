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
                        bs: "01–04",
                        postName: "Naib Qasid, Sweeper, Cook, Driver",
                        qualification: "Primary to Middle",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "07",
                        postName: "Constable",
                        qualification: "Matric",
                        ageLimit: "18–25",
                    },
                    {
                        bs: "14",
                        postName: "Assistant Sub-Inspector (ASI)",
                        qualification: "Bachelor’s",
                        ageLimit: "20–28",
                    },
                    {
                        bs: "16",
                        postName: "Sub-Inspector (SI)",
                        qualification: "Bachelor’s",
                        ageLimit: "21–30",
                    },
                    {
                        bs: "17",
                        postName: "Assistant Director",
                        qualification: "Master’s or 16 years education",
                        ageLimit: "22–30",
                    },
                ],
            },
        ],
    },
]