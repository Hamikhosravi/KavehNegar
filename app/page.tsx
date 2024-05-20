"use client";

import Link from 'next/link';
import { usePosts } from '../hooks/usePosts';
import { Post } from "../interfaces/post";
import React from "react";

export default function HomePage() {
    const { data, error, isLoading } = usePosts();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (!data) return <div>No data found</div>; // Add this check to handle undefined data

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Posts</h1>
            <ul>
                {data.map((post: Post) => (
                    <li key={post.id} className="my-2">
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
