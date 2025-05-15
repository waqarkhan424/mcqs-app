import type { Ministry } from "./types";

export const narcoticsControl: Ministry = {
    name: "Ministry of Narcotics Control",
    slug: "narcotics-control",
    departments: [
        { name: "Anti-Narcotics Force (ANF)", slug: "anf", type: "Force", posts: [] },
        { name: "Regional Directorates of ANF", slug: "anf-regional", type: "Directorate", posts: [] },
        { name: "Policy & Coordination Wing", slug: "policy-coordination-wing", type: "Wing", posts: [] },
    ]

};
