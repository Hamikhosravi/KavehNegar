import { renderHook } from '@testing-library/react';
import { usePosts } from '../../hooks/usePosts';

// Mock the axios-utils module to return a sample response
jest.mock('../utils/axios-utils', () => ({
    postRequest: jest.fn().mockResolvedValue([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }])
}));

describe('usePosts', () => {
    test('should fetch posts successfully', async () => {
        const { result, waitForNextUpdate }: any = renderHook(() => usePosts());

        // Initially, isLoading should be true
        expect(result.current.isLoading).toBe(true);

        // Wait for the hook to finish fetching data
        await waitForNextUpdate();

        // After fetching, isLoading should be false
        expect(result.current.isLoading).toBe(false);

        // Data should contain the fetched posts
        expect(result.current.data).toEqual([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);

        // Error should be null
        expect(result.current.error).toBe(null);
    });

    test('should handle error when fetching posts fails', async () => {
        // Mock the axios-utils module to return an error
        jest.mock('../utils/axios-utils', () => ({
            postRequest: jest.fn().mockRejectedValue(new Error('Failed to fetch posts'))
        }));

        const { result, waitForNextUpdate }:any = renderHook(() => usePosts());

        // Initially, isLoading should be true
        expect(result.current.isLoading).toBe(true);

        // Wait for the hook to finish fetching data
        await waitForNextUpdate();

        // After fetching, isLoading should be false
        expect(result.current.isLoading).toBe(false);

        // Data should be null
        expect(result.current.data).toBe(null);

        // Error should not be null
        expect(result.current.error).toEqual(new Error('Failed to fetch posts'));
    });
});
