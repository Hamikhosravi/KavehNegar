import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from '../interfaces/post';

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return data;
};

export const usePosts = () => {
    return useQuery<Post[], Error>({
        queryKey: ['posts'], // Define queryKey as an array with a single string element
        queryFn: fetchPosts, // Pass the fetch function
    });
};
