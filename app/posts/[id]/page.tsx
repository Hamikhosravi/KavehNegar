"use client";

import { useRouter } from "next/navigation";
import { usePost } from '../../../hooks/usePost';
import React from "react";
import LoadingSpin from "../../../components/LoadingSpin";

type paramsProps = {
    params:{id: string;}
}

export default function PostPage({ params }: paramsProps) {
    const router = useRouter();
    const { data, error, isLoading } = usePost(params.id);

    if (isLoading) return <LoadingSpin />;
    if (error) return <div>Error: {error.message}</div>;

    if (!data) return <div>No data found</div>; // Add this check to handle undefined data

    return (
        <>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p>{data.body}</p>
            <button onClick={()=>router.push("/")} className="rounded bg-blue-500 text-white px-3 py-2 mt-4">
                Go Back
            </button>
        </>
    );
}
