"use client";

import { usePosts } from '../hooks/usePosts';
import { Post } from "../interfaces/post";
import React from "react";
import CardPost from "../components/PostCard"

export default function HomePage() {
    const { data, error, isLoading } = usePosts();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (!data) return <div>No data found</div>; // Add this check to handle undefined data

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center">Posts</h1>
            <ul className="flex justify-center sm:justify-evenly items-center flex-wrap">
                {data.map((post: Post) => (
                    <CardPost id={post.id} title={post.title} key={post.id}/>
                ))}
            </ul>
        </div>
    );
}
