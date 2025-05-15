import type { Ministry } from "./types";

export const healthServices: Ministry = {
    name: "Ministry of National Health Services, Regulations & Coordination",
    slug: "health-services",
    departments: [
        { name: "National Institute of Health (NIH)", slug: "nih", type: "Institute", posts: [] },
        { name: "Drug Regulatory Authority of Pakistan (DRAP)", slug: "drap", type: "Authority", posts: [] },
        { name: "Expanded Programme on Immunization (EPI)", slug: "epi", type: "Programme", posts: [] },
        { name: "Pakistan Nursing Council (PNC)", slug: "pnc", type: "Council", posts: [] },
    ]

};
