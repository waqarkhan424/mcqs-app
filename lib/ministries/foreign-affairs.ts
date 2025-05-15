import type { Ministry } from "./types";

export const foreignAffairs: Ministry = {
    name: "Ministry of Foreign Affairs",
    slug: "foreign-affairs",
    departments: [
        { name: "Diplomatic Missions", slug: "diplomatic-missions", type: "Division", posts: [] },
        { name: "Foreign Service Academy", slug: "foreign-service-academy", type: "Academy", posts: [] },
        { name: "United Nations Division", slug: "un-division", type: "Division", posts: [] },
    ]
};
