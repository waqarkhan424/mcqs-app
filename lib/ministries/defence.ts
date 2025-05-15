import type { Ministry } from "./types";

export const defence: Ministry = {
    name: "Ministry of Defence",
    slug: "defence",
    departments: [
        { name: "Pakistan Army", slug: "pakistan-army", type: "Armed Force", posts: [] },
        { name: "Pakistan Navy", slug: "pakistan-navy", type: "Armed Force", posts: [] },
        { name: "Pakistan Air Force", slug: "pakistan-air-force", type: "Armed Force", posts: [] },
        { name: "Military Lands & Cantonments", slug: "mlc", type: "Department", posts: [] },
        { name: "Defence Division", slug: "defence-division", type: "Division", posts: [] },
    ]
};
