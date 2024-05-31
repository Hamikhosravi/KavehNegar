'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Post } from '../interfaces/post';

type PostPageProps = {
    post: Post;
};

const PostPage = ({ post }:PostPageProps) => {
    const router = useRouter();

    return (
        <>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => router.push('/')} className="rounded bg-blue-500 text-white px-3 py-2 mt-4">
                Go Back
            </button>
        </>
    );
};

export default PostPage;
