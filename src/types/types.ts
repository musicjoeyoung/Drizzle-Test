export interface User {
    name: string,
    email: string,
    password: string,
    age: number,
}
export interface Post {
    title: string,
    content: string,
    userId: number
}