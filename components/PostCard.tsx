import Link from "next/link";
import React from "react";

type PostProps = {
    id: number;
    title: string
}

export default function PostCard({id,title}:PostProps) {
    return(
        <li key={id} className="w-60 h-40 bg-gray-200 border border-blue-300  shadow-md flex items-center justify-center m-2 hover:border-blue-500 transition duration-200">
            <Link href={`/posts/${id}`} className="p-2 text-gray-700 hover:underline flex text-center">
                {title}
            </Link>
        </li>
    )
}
