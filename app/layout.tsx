"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

type ChildrenProps = {
    children: ReactNode;
}

const queryClient = new QueryClient();

function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
        <body>
        <QueryClientProvider client={queryClient}>
            <nav className="p-4 bg-gray-800 text-white">
                <Link href="/" className="mr-4">Home</Link>
                <Link href="/new">Create Post</Link>
            </nav>
            {children}
        </QueryClientProvider>
        </body>
        </html>
    );
}

export default RootLayout;
