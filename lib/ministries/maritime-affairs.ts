import type { Ministry } from "./types";

export const maritimeAffairs: Ministry = {
    name: "Ministry of Maritime Affairs",
    slug: "maritime-affairs",
    departments: [
        { name: "Karachi Port Trust (KPT)", slug: "kpt", type: "Authority", posts: [] },
        { name: "Port Qasim Authority (PQA)", slug: "pqa", type: "Authority", posts: [] },
        { name: "Gwadar Port Authority (GPA)", slug: "gpa", type: "Authority", posts: [] },
        { name: "Pakistan Marine Academy", slug: "pakistan-marine-academy", type: "Academy", posts: [] },
    ]

};
