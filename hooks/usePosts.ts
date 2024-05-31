// hooks/usePosts.ts
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Post } from '../interfaces/post';
import { postRequest } from "../utils/axios-utils";
import { useMemo } from 'react';

const fetchPosts = async (): Promise<Post[]> => {
    return await postRequest<Post[]>({ url: '/posts' });
};

export const usePosts = (initialData?: Post[]): UseQueryResult<Post[], Error> => {
    const fetchPostsMemoized = useMemo(() => fetchPosts, []);

    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPostsMemoized,
        initialData, // Pass initial data to the useQuery hook
    });
};
