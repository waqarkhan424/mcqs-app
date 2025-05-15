import type { Ministry } from "./types";

export const federalEducation: Ministry = {
    name: "Ministry of Federal Education & Professional Training",
    slug: "federal-education",
    departments: [
        { name: "Higher Education Commission (HEC)", slug: "hec", type: "Commission", posts: [] },
        { name: "National Vocational and Technical Training Commission (NAVTTC)", slug: "navttc", type: "Commission", posts: [] },
        { name: "Federal Directorate of Education (FDE)", slug: "fde", type: "Directorate", posts: [] },
    ]
};
