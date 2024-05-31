import React from 'react';
import { notFound } from 'next/navigation';
import { postRequest } from '../../../utils/axios-utils';
import PostPage from '../../../components/PostPage'; // Import the client component if you have it separately
import { Post } from '../../../interfaces/post'; // Adjust the path as necessary

const PostPageServer = async ({ params }: { params: { id: string } }) => {
    let post: Post | null = null;

    try {
        post = await postRequest<Post>({ url: `/posts/${params.id}` });
    } catch (error) {
        console.error('Failed to fetch post:', error);
    }

    if (!post) {
        notFound();
    }

    return <PostPage post={post} />;
};

export default PostPageServer;
