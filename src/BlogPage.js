import React from "react";
import { blogData } from "./BlogData";
import { BlogLink } from "./BlogLink";

function BlogPage() {
    return (
        <>
            <h1>BlogPage</h1>
            <ul>
                {blogData.map(post => (
                    <BlogLink
                        key={post.slug}
                        post={post}
                    />
                ))}


            </ul>
        </>
    );
}

export { BlogPage };