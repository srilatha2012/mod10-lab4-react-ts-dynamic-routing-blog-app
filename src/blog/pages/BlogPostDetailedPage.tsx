import { useParams } from "react-router-dom"
import { posts } from "../../lib/posts";

export function BlogPostDetailedPage() {

    //1. Grab the slug directly from the url path
    const { slug } = useParams<{slug: string}>();
    
    //2. Find the specific post object that matches the slug
    const post = posts.find((post) => post.slug === slug);

    //3 Handle the case where the slug doesn't match any real post
    if(!post) {
        return <h2>Post not found</h2>
    }
    
    //4. Render the found post details
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    ); 
}