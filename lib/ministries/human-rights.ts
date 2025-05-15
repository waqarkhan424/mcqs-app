import type { Ministry } from "./types";

export const humanRights: Ministry = {
    name: "Ministry of Human Rights",
    slug: "human-rights",
    departments: [
        { name: "National Commission for Human Rights (NCHR)", slug: "nchr", type: "Commission", posts: [] },
        { name: "National Commission on the Status of Women (NCSW)", slug: "ncsw", type: "Commission", posts: [] },
        { name: "National Child Protection Centre (NCPC)", slug: "ncpc", type: "Centre", posts: [] },
        { name: "Directorate General of Special Education", slug: "dgse", type: "Directorate", posts: [] },
    ]


};
