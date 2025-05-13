
export type Post = {
    bps: string
    title: string
    degree: string
    age: string
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
                        bps: "01–04",
                        title: "Naib Qasid, Sweeper, Cook, Driver",
                        degree: "Primary to Middle",
                        age: "18–25"
                    },
                    {
                        bps: "07",
                        title: "Constable",
                        degree: "Matric",
                        age: "18–25"
                    },
                    {
                        bps: "14",
                        title: "Assistant Sub-Inspector (ASI)",
                        degree: "Bachelor’s",
                        age: "20–28"
                    },
                    {
                        bps: "16",
                        title: "Sub-Inspector (SI)",
                        degree: "Bachelor’s",
                        age: "21–30"
                    },
                    {
                        bps: "17",
                        title: "Assistant Director",
                        degree: "Master’s or 16 years education",
                        age: "22–30"
                    }
                ]
            },
            {
                name: "National Database and Registration Authority (NADRA)",
                slug: "nadra",
                type: "Authority",
                posts: [
                    {
                        bps: "14",
                        title: "Junior Executive",
                        degree: "Intermediate",
                        age: "18–30"
                    },
                    {
                        bps: "16",
                        title: "Supervisor",
                        degree: "Bachelor’s",
                        age: "20–28"
                    },
                    {
                        bps: "17",
                        title: "Deputy Assistant Director",
                        degree: "Master’s",
                        age: "22–30"
                    }
                ]
            }
        ]
    }
]
