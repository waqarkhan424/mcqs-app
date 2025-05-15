import type { Ministry } from "./types";

export const economicAffairs: Ministry = {
    name: "Ministry of Economic Affairs",
    slug: "economic-affairs",
    departments: [
        { name: "External Finance Wing", slug: "external-finance-wing", type: "Wing", posts: [] },
        { name: "Debt Management Office", slug: "debt-management-office", type: "Office", posts: [] },
        { name: "Economic Affairs Division (EAD)", slug: "ead", type: "Division", posts: [] },
    ]
};
