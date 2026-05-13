import { Link } from "react-router-dom"
import { posts } from "../../lib/posts"

//display the list of all available blog posts
export default function BlogIndexPage() {
    return (

        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                    <Link to= {`/blog/${post.slug}`}>
                     {post.title}
                    </Link>
                   
                    </li>
                ))}
            </ul>
        </div>

    )
}