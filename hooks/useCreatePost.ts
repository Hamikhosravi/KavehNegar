import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { postRequest } from "../utils/axios-utils";

type NewPostData = {
    title: string;
    body: string;
    userId: number;
};

const createPost = async (postData: NewPostData): Promise<NewPostData> => {
    return await postRequest<NewPostData>({ url: '/posts', method: 'post', data: postData });
};

export const useCreatePost = (
    options?: UseMutationOptions<NewPostData, Error, NewPostData>
): UseMutationResult<NewPostData, Error, NewPostData> => {
    return useMutation<NewPostData, Error, NewPostData>({
        mutationKey: ['sendPost'],
        mutationFn: createPost,
        ...options
    });
};
