import React from "react";
import { blogData } from "./BlogData";
import { BlogLink } from "./BlogLink";
import { Outlet } from "react-router-dom";

function BlogPage() {
    return (
        <>
            <h1>BlogPage</h1>

            <Outlet/>
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