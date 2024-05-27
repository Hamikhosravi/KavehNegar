// // __tests__/hooks/usePost.test.ts
//
// import { renderHook } from '@testing-library/react'; // Or your testing library package
// import { waitFor } from '@testing-library/react'; // Import waitFor from @testing-library/react
// import { usePost } from '../../hooks/usePost';
//
// describe('usePost', () => {
//     test('should fetch post data', async () => {
//         const postId = '1';
//         const { result } = renderHook(() => usePost(postId));
//
//         expect(result.current.isLoading).toBeTruthy();
//
//         await waitFor(() => {
//             return !result.current.isLoading;
//         });
//
//         expect(result.current.error).toBeNull();
//         // Add more assertions as needed
//     });
// });
