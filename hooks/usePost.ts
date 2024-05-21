import { useQuery } from '@tanstack/react-query';
import {postRequest} from "../utils/axios-utils";
import { Post } from '../interfaces/post';

const fetchPost = async (id: string): Promise<Post> => {
    return await postRequest<Post>({ url: `/posts/${id}` });
};

export const usePost = (id: string) => {
    return useQuery<Post, Error>({
        queryKey: ['post', id], // Define queryKey as an array with two elements
        queryFn: () => fetchPost(id), // Pass the fetch function
    });
};

