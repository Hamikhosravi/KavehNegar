import React, { memo } from "react";
import Link from "next/link";

type PostProps = {
    id: number;
    title: string;
};

const PostCard = memo(({ id, title }: PostProps) => {
    return (
        <li className="w-60 h-40 bg-gray-200 border border-blue-300 shadow-md flex items-center justify-center m-2 hover:border-blue-500 transition duration-200">
            <Link href={`/posts/${id}`} className="p-2 text-gray-700 hover:underline flex text-center">
                {title}
            </Link>
        </li>
    );
});

export default PostCard;
