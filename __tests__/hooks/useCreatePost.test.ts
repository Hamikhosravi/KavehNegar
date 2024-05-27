// __tests__/hooks/useCreatePost.test.ts

import { renderHook, act } from '@testing-library/react'; // Or your testing library package
import { waitFor } from '@testing-library/react'; // Import waitFor from @testing-library/react
import { useCreatePost } from '../../hooks/useCreatePost';

describe('useCreatePost', () => {
    test('should successfully create a post', async () => {
        const { result } = renderHook(() => useCreatePost());

        expect(result.current.isPending).toBeFalsy();

        await act(async () => {
            await result.current.mutate({ title: 'Test Title', body: 'Test Body', userId: 1 });
        });

        await waitFor(() => {
            expect(result.current.isPending).toBeFalsy();
            // Add more assertions as needed
        });
    });
});
