import { useQuery } from '@tanstack/react-query';
import { Post } from '../interfaces/post';
import {postRequest} from "../utils/axios-utils";

const fetchPosts = async (): Promise<Post[]> => {
    return await postRequest<Post[]>({ url: '/posts' });
};

export const usePosts = () => {
    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    });
};
