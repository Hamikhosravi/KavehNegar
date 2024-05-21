"use client";

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { useCreatePost } from '../../hooks/useCreatePost';
import MessagePortal from '../../components/Modal';
import Form from "../../components/Form";
import Textarea from "../../components/TextArea";
import Input from "../../components/Input";

export default function NewPostPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');
    const [showPortal, setShowPortal] = useState(false); // State to control the visibility of the portal

    useEffect(()=>{
        inputRef!.current?.focus();
    },[]);

    const { mutate, isPending } = useCreatePost({
        onSuccess: () => {
            setMessage('Post created successfully!');
            setShowPortal(true); // Show the portal when post is successful
        },
        onError: () => {
            setMessage('Failed to create post.');
            setShowPortal(true); // Show the portal when there's an error
        }
    });

    const handleSave = (e:FormEvent<HTMLFormElement>,data:unknown):void => {
        const {title,body} = data as {title:string, body:string};
        mutate({ title, body, userId: 11 });
        e.currentTarget.reset();
    };

    const handleClosePortal = () => {
        setShowPortal(false); // Close the portal
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center">New Post</h1>
            <Form onSave={handleSave} className="space-y-4">
                <Input type="text" label="Title" name="title" required ref={inputRef}/>
                <Textarea label="Body" name="body" required />
                {/*<Input type="text" label="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>*/}
                {/*<Textarea label="Body" name="body" value={body} onChange={(e) => setBody(e.target.value)} required />*/}
                <button type="submit" className="rounded bg-blue-500 text-white p-2 disabled:bg-opacity-50" disabled={isPending}>
                    {isPending ? 'Submitting...' : 'Submit'}
                </button>
            </Form>
            {showPortal && <MessagePortal message={message} onClose={handleClosePortal} />} {/* Render the portal when showPortal is true */}
        </>
    );
}
