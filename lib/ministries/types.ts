export type Post = {
    bs: string
    postName: string
    qualification: string
    ageLimit: string
}

export type Department = {
    name: string
    slug: string
    type: string
    posts: Post[]
}

export type Ministry = {
    name: string
    slug: string
    departments: Department[]
}

