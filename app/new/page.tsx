"use client";

import React, { useState, useRef, useEffect, FormEvent, useCallback } from 'react';
import { useCreatePost } from '../../hooks/useCreatePost';
import MessagePortal from '../../components/Modal';
import Form from "../../components/Form";
import Textarea from "../../components/TextArea";
import Input from "../../components/Input";

type Message = {
    text: string;
    status: string;
}

export default function NewPostPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<Message>({text:'',status:''});
    const [showPortal, setShowPortal] = useState(false); // State to control the visibility of the portal

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const { mutate, isPending } = useCreatePost({
        onSuccess: () => {
            setMessage({text:'Post created successfully!',status:'successful'});
            setShowPortal(true); // Show the portal when post is successful
        },
        onError: () => {
            setMessage({text:'Failed to create post.', status:'failed'});
            setShowPortal(true); // Show the portal when there's an error
        }
    });

    const handleSave = useCallback((e: FormEvent<HTMLFormElement>, data: unknown) => {
        const { title, body } = data as { title: string, body: string };
        mutate({ title, body, userId: 11 });
        e.currentTarget.reset();
    }, [mutate]);

    const handleClosePortal = useCallback(() => {
        setShowPortal(false); // Close the portal
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold text-center">New Post</h1>
            <Form onSave={handleSave} className="space-y-4">
                <Input type="text" label="Title" name="title" required ref={inputRef} />
                <Textarea label="Body" name="body" required />
                <button type="submit" className="rounded bg-blue-500 text-white p-2 disabled:bg-opacity-50" disabled={isPending}>
                    {isPending ? 'Submitting...' : 'Submit'}
                </button>
            </Form>
            {showPortal && <MessagePortal message={message} onClose={handleClosePortal} />} {/* Render the portal when showPortal is true */}
        </>
    );
}
