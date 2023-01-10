export interface Post {
    id: number
    title: string
    body: string
}

export interface PagedPosts {
    content: Array<Post>
    number: number
    size: number
}