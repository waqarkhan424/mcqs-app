import type { Ministry } from "./types";

export const defenceProduction: Ministry = {
    name: "Ministry of Defence Production",
    slug: "defence-production",
    departments: [
        { name: "Pakistan Ordnance Factories (POF)", slug: "pof", type: "Factory", posts: [] },
        { name: "Heavy Industries Taxila (HIT)", slug: "hit", type: "Industry", posts: [] },
        { name: "Pakistan Aeronautical Complex (PAC)", slug: "pac", type: "Complex", posts: [] },
        { name: "Karachi Shipyard & Engineering Works", slug: "karachi-shipyard", type: "Shipyard", posts: [] },
    ]

};
