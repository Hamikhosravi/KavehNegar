"use client";

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from "../components/Header";
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
            <Header />
            {children}
        </QueryClientProvider>
        </body>
        </html>
    );
}

export default RootLayout;
