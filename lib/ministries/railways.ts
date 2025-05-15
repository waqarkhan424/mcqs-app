import type { Ministry } from "./types";

export const railways: Ministry = {
    name: "Ministry of Railways",
    slug: "railways",
    departments: [
        { name: "Pakistan Railways Headquarters", slug: "railways-hq", type: "Department", posts: [] },
        { name: "Pakistan Railway Police", slug: "railway-police", type: "Force", posts: [] },
        { name: "Pakistan Railways Academy Walton", slug: "railways-academy", type: "Academy", posts: [] },
        { name: "Railway Construction Pakistan Limited (RAILCOP)", slug: "railcop", type: "Corporation", posts: [] },
    ]

};
