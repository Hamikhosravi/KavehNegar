"use client";

import { useRouter } from "next/navigation";
import { usePost } from '../../../hooks/usePost';
import React from "react";

export default function PostPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { data, error, isLoading } = usePost(params.id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (!data) return <div>No data found</div>; // Add this check to handle undefined data

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.body}</p>
            <button onClick={()=>router.push("/")} className="mt-4 text-blue-500">
                Go Back
            </button>
        </div>
    );
}
