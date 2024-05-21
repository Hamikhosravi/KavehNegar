import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="p-4 bg-gray-800 text-white h-[10vh] max-h-20	 flex" >
            <nav className="container m-auto">
                <Link href="/" className="mr-4">Home</Link>
                <Link href="/new">Create Post</Link>
            </nav>
        </header>
    )
}
