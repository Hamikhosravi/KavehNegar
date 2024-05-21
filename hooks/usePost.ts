import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { postRequest } from "../utils/axios-utils";
import { Post } from '../interfaces/post';
import { useMemo } from 'react';

const fetchPost = async (id: string): Promise<Post> => {
    return await postRequest<Post>({ url: `/posts/${id}` });
};

export const usePost = (id: string): UseQueryResult<Post, Error> => {
    const fetchPostMemoized = useMemo(
        () => fetchPost,
        []
    );

    return useQuery<Post, Error>({
        queryKey: ['post', id], // Define queryKey as an array with two elements
        queryFn: () => fetchPostMemoized(id), // Pass the memoized fetch function
    });
};
