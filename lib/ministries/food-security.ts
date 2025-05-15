import type { Ministry } from "./types";

export const foodSecurity: Ministry = {
    name: "Ministry of National Food Security & Research",
    slug: "food-security",
    departments: [
        { name: "Pakistan Agricultural Research Council (PARC)", slug: "parc", type: "Council", posts: [] },
        { name: "Department of Plant Protection (DPP)", slug: "dpp", type: "Department", posts: [] },
        { name: "Federal Seed Certification & Registration Department", slug: "federal-seed-certification", type: "Department", posts: [] },
        { name: "Pakistan Oilseed Development Board (PODB)", slug: "podb", type: "Board", posts: [] },
    ]

};
