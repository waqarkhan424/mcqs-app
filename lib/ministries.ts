
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
