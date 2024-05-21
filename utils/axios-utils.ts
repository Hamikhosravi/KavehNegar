import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Interceptor
const postClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Authorization': 'Bearer Token',
        'Content-Type': 'application/json',
    },
});

export const postRequest = async <T>(options: AxiosRequestConfig): Promise<T> => {
    const onSuccess = (response: AxiosResponse<T>): T => response.data;
    const onError = (error: AxiosError): never => {
        throw error;
    };

    try {
        const response = await postClient(options);
        return onSuccess(response);
    } catch (error) {
        return onError(error as AxiosError);
    }
};
