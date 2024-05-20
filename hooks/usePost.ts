import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from '../interfaces/post';

const fetchPost = async (id: string): Promise<Post> => {
    const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};

export const usePost = (id: string) => {
    return useQuery<Post, Error>({
        queryKey: ['post', id], // Define queryKey as an array with two elements
        queryFn: () => fetchPost(id), // Pass the fetch function
    });
};
