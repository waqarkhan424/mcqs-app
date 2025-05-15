import type { Ministry } from "./types";

export const lawJustice: Ministry = {
    name: "Ministry of Law & Justice",
    slug: "law-justice",
    departments: [
        { name: "Attorney General's Office", slug: "attorney-general", type: "Office", posts: [] },
        { name: "Pakistan Law and Justice Commission", slug: "law-justice-commission", type: "Commission", posts: [] },
        { name: "Council of Islamic Ideology", slug: "council-islamic-ideology", type: "Council", posts: [] },
        { name: "Federal Shariat Court", slug: "federal-shariat-court", type: "Court", posts: [] },
    ]

};
