import type { Ministry } from "./types";

export const statesFrontierRegions: Ministry = {
    name: "Ministry of States & Frontier Regions",
    slug: "safar",
    departments: [
        { name: "Commissionerate for Afghan Refugees", slug: "afghan-refugees", type: "Commissionerate", posts: [] },
        { name: "Frontier Regions Administration", slug: "fr-admin", type: "Administration", posts: [] },
        { name: "Disaster Risk Reduction Cell", slug: "drr-cell", type: "Cell", posts: [] },
    ]
};
