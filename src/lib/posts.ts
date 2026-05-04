import type { Post } from "../types/post";

export const posts: Post[] = [

    {
        id: 1,
        slug: "my-first-post",
        title: "My First Post",
        content: "This is the content of my first post",
    },
      {
        id: 2,
        slug: "learning-next-js",
        title: "Learning Next.js",
        content: "Next js makes routing very simple using folders",
    },
      {
        id: 3,
        slug: "dynamic-routes",
        title: "Dynamic routes",
        content: "Dynamic routes allow us to create pages based on URL values.",
    }
]

