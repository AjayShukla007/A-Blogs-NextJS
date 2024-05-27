'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-2 m-1">
            <h1 className="text-cyan-200">myNav</h1>
            <Link
                className={`link ${pathname === '/' ? 'text-red-600' : ''}`}
                href={"/"} >
                Home
            </Link>
            <Link
                className={`link ${pathname === '/about' ? 'text-red-600' : ''}`}
                href={"/about"} >
                About
            </Link>
        </nav>
    )
}

export default NavBar