import type { Ministry } from "./types";

export const finance: Ministry = {
    name: "Ministry of Finance & Revenue",
    slug: "finance",
    departments: [
        { name: "Federal Board of Revenue (FBR)", slug: "fbr", type: "Authority", posts: [] },
        { name: "Securities and Exchange Commission of Pakistan (SECP)", slug: "secp", type: "Commission", posts: [] },
        { name: "State Bank of Pakistan (SBP)", slug: "sbp", type: "Central Bank", posts: [] },
        { name: "Economic Affairs Division", slug: "economic-affairs-division", type: "Division", posts: [] },
        { name: "Budget Wing", slug: "budget-wing", type: "Wing", posts: [] },
    ]


};
