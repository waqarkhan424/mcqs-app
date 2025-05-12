
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

// export const ministries: Ministry[] = [
//     {
//         name: "Ministry of Interior",
//         slug: "interior",
//         departments: [
//             {
//                 name: "Federal Investigation Agency (FIA)",
//                 type: "Department",
//                 slug: "federal-investigation-agency",
//                 posts: [
//                     { bps: "01–04", title: "Naib Qasid, Sweeper, …", entry: "Entry level (Support Staff)" },
//                     { bps: "05", title: "Dispatch Rider, Constable Driver", entry: "Entry level" },

//                 ]
//             },

//         ]
//     },
// ]


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
                    // … add all Interior posts here …
                ]
            },
            // … other Interior departments …
        ]
    },
    {
        name: "Ministry of Finance",
        slug: "finance",
        departments: [
            { name: "Federal Board of Revenue (FBR)", type: "Authority", slug: "federal-board-of-revenue", posts: [] },
            { name: "Securities and Exchange Commission of Pakistan (SECP)", type: "Commission", slug: "securities-and-exchange-commission", posts: [] },
            { name: "State Bank of Pakistan", type: "Central Bank", slug: "state-bank-of-pakistan", posts: [] },
            { name: "Department of Revenue Islamabad", type: "Department", slug: "department-of-revenue-islamabad", posts: [] },
        ]
    },
    {
        name: "Ministry of Defence",
        slug: "defence",
        departments: [
            { name: "General Headquarters (GHQ)", type: "Headquarters", slug: "general-headquarters", posts: [] },
            { name: "Pakistan Navy HQ", type: "Headquarters", slug: "pakistan-navy-headquarters", posts: [] },
            { name: "Air Headquarters", type: "Headquarters", slug: "air-headquarters", posts: [] },
            { name: "Defence Housing Authority (DHA)", type: "Authority", slug: "defence-housing-authority", posts: [] },
            { name: "Inter-Services Public Relations (ISPR)", type: "Directorate", slug: "inter-services-public-relations", posts: [] },
        ]
    },
    {
        name: "Ministry of Foreign Affairs",
        slug: "foreign-affairs",
        departments: [
            { name: "Directorate of Staff Development", type: "Directorate", slug: "directorate-of-staff-development", posts: [] },
            { name: "Institute of Strategic Studies Islamabad (ISSI)", type: "Institute", slug: "issi", posts: [] },
            { name: "Foreign Service Academy", type: "Academy", slug: "foreign-service-academy", posts: [] },
            { name: "Passport and Immigration Office", type: "Directorate", slug: "passport-and-immigration-office", posts: [] },
        ]
    },
    {
        name: "Ministry of Federal Education and Professional Training",
        slug: "federal-education",
        departments: [
            { name: "Higher Education Commission (HEC)", type: "Commission", slug: "higher-education-commission", posts: [] },
            { name: "National Literacy and Skills Development Agency (NLSDA)", type: "Agency", slug: "nlsda", posts: [] },
            { name: "Federal Directorate of Education (FDE)", type: "Directorate", slug: "federal-directorate-of-education", posts: [] },
            { name: "National Vocational and Technical Training Commission (NAVTTC)", type: "Commission", slug: "navttc", posts: [] },
        ]
    },
    {
        name: "Ministry of Information Technology and Telecommunication",
        slug: "it-telecom",
        departments: [
            { name: "Pakistan Telecommunication Authority (PTA)", type: "Authority", slug: "pakistan-telecommunication-authority", posts: [] },
            { name: "National Information Technology Board (NITB)", type: "Board", slug: "national-information-technology-board", posts: [] },
            { name: "Ignite National Technology Fund", type: "Fund", slug: "ignite-national-technology-fund", posts: [] },
            { name: "Pakistan Software Export Board (PSEB)", type: "Board", slug: "pakistan-software-export-board", posts: [] },
        ]
    }
]
