import type { Ministry } from "./types";

export const communications: Ministry = {
    name: "Ministry of Communications",
    slug: "communications",
    departments: [
        { name: "Pakistan Post", slug: "pakistan-post", type: "Department", posts: [] },
        { name: "National Highway Authority (NHA)", slug: "nha", type: "Authority", posts: [] },
        { name: "National Transport Research Centre (NTRC)", slug: "ntrc", type: "Centre", posts: [] },
        { name: "Construction Technology Training Institute (CTTI)", slug: "ctti", type: "Institute", posts: [] },
    ]

};
