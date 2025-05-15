import type { Ministry } from "./types";

export const energy: Ministry = {
    name: "Ministry of Energy",
    slug: "energy",
    departments: [
        { name: "Power Division", slug: "power-division", type: "Division", posts: [] },
        { name: "Petroleum Division", slug: "petroleum-division", type: "Division", posts: [] },
        { name: "Alternative Energy Development Board (AEDB)", slug: "aedb", type: "Board", posts: [] },
        { name: "Hydrocarbon Development Institute of Pakistan (HDIP)", slug: "hdip", type: "Institute", posts: [] },
    ]

};
