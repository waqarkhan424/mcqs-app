
export type Post = {
    bps: string
    title: string
    entry: string
}

export type Department = {
    name: string
    type: string
    slug: string
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
                type: "Department",
                slug: "federal-investigation-agency",
                posts: [
                    { bps: "01–04", title: "Naib Qasid, Sweeper, …", entry: "Entry level (Support Staff)" },
                    { bps: "05", title: "Dispatch Rider, Constable Driver", entry: "Entry level" },

                ]
            },

        ]
    },
]
