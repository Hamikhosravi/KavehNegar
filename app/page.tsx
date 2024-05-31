// app/page.tsx
import { Post } from "../interfaces/post";
import ClientComponent from "../components/ClientComponent";
import { postRequest } from "../utils/axios-utils";
import React from "react";

const HomePage = async () => {
    let initialPosts: Post[] = [];

    try {
        initialPosts = await postRequest<Post[]>({ url: '/posts' });
    } catch (error) {
        console.error("Failed to fetch initial posts:", error);
    }

    return <ClientComponent initialPosts={initialPosts} />;
};

export default HomePage;
