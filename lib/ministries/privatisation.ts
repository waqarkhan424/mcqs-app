import type { Ministry } from "./types";

export const privatisation: Ministry = {
    name: "Ministry of Privatisation",
    slug: "privatisation",
    departments: [
        { name: "Privatisation Commission", slug: "privatisation-commission", type: "Commission", posts: [] },
        { name: "Transaction Wing", slug: "transaction-wing", type: "Wing", posts: [] },
        { name: "Legal & Litigation Wing", slug: "legal-litigation", type: "Wing", posts: [] },
    ]

};
