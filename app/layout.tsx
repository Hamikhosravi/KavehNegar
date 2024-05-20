import { ReactNode } from 'react';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

type ChildrenProps = {
    children: ReactNode
}

const queryClient = new QueryClient();

function RootLayout({ children }: ChildrenProps) {
  return (
      <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        <nav className="p-4 bg-gray-800 text-white">
          <Link href="/">
            <p className="mr-4">Home</p>
          </Link>
          <Link href="/new">
            <p>Create Post</p>
          </Link>
        </nav>
        {children}
      </QueryClientProvider>
      </body>
      </html>
  );
}

export default RootLayout;
