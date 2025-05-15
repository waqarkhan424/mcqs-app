import type { Ministry } from "./types";

export const parliamentaryAffairs: Ministry = {
    name: "Ministry of Parliamentary Affairs",
    slug: "parliamentary-affairs",
    departments: [
        { name: "National Assembly Secretariat Liaison Wing", slug: "na-liaison-wing", type: "Wing", posts: [] },
        { name: "Senate Coordination Wing", slug: "senate-coordination", type: "Wing", posts: [] },
        { name: "Parliamentary Business Section", slug: "parliamentary-business", type: "Section", posts: [] },
    ]

};
