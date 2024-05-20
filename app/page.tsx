import Link from 'next/link';
import { usePosts } from '../hooks/usePosts';
import { Post } from "../interfaces/post";

export default function HomePage() {
    const { data, error, isLoading } = usePosts();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Check if data is not undefined and is an array
    if (!Array.isArray(data)) return <div>No data found</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Posts</h1>
            <ul>
                {data.map((post: Post) => (
                    <li key={post.id} className="my-2">
                        <Link href={`/posts/${post.id}`}>
                            <a className="text-blue-500 hover:underline">{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
