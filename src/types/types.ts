export interface Category {
    name: string
}

export interface Comment {
    content: string,
    userId: number,
    postId: number
}

export interface PostCategory {
    postId: number,
    categoryId: number
}

export interface PostLike {
    postId: number,
    userId: number
}

export interface Post {
    title: string,
    content: string,
    userId: number
}

export interface PostTag {
    postId: number,
    tagId: number
}

export interface Tag {
    name: string
}

export interface User {
    name: string,
    email: string,
    password: string,
    age: number,
}




