// components/ClientComponent.tsx.tsx
"use client";

import { usePosts } from '../hooks/usePosts';
import { Post } from "../interfaces/post";
import React from "react";
import CardPost from "./PostCard";
import LoadingSpin from "./LoadingSpin";

interface ClientComponentProps {
    initialPosts: Post[];
}

const ClientComponent = ({ initialPosts }:ClientComponentProps) => {
    const { data, error, isLoading } = usePosts(initialPosts);

    if (isLoading) return <LoadingSpin />;
    if (error) return <div>Error: {error.message}</div>;

    if (!data) return <div>No data found</div>; // Add this check to handle undefined data

    return (
        <>
            <h1 className="text-2xl font-bold text-center">Posts</h1>
            <ul className="flex justify-center sm:justify-evenly items-center flex-wrap">
                {data.map((post: Post) => (
                    <CardPost id={post.id} title={post.title} key={post.id} />
                ))}
            </ul>
        </>
    );
};

export default ClientComponent;
