export interface Post {
    id: string;
    bs: string;
    postName: string;
    qualification: string;
    ageLimit: string;
}

export interface Department {
    id: string;
    name: string;
    slug: string;
    type: string;
    posts: Post[];
}

export interface Ministry {
    id: string;
    name: string;
    slug: string;
    departments: Department[];
}
