import type { Ministry } from "./types";

export const waterResources: Ministry = {
    name: "Ministry of Water Resources",
    slug: "water-resources",
    departments: [
        { name: "Indus River System Authority (IRSA)", slug: "irsa", type: "Authority", posts: [] },
        { name: "Pakistan Water and Power Development Authority (WAPDA)", slug: "wapda", type: "Authority", posts: [] },
        { name: "Office of Pakistan Commissioner for Indus Waters", slug: "indus-commissioner", type: "Office", posts: [] },
        { name: "Federal Flood Commission (FFC)", slug: "ffc", type: "Commission", posts: [] },
    ]

};
