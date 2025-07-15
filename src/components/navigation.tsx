'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignInButton, UserButton } from "@clerk/nextjs";

export const Navigation=()=> {
    const pathname=usePathname();
    
    return <nav className="flex">
        <div className="ml-auto"></div>
        <Link href="/" className={pathname==="/" ? "font-bold mr-4" : "text-white mr-4"}>Home</Link>
        <Link href="/about" className={pathname==="/about" ? "font-bold mr-4" : "text-white mr-4"}>About</Link>
        <Link href="/register" className={pathname==="/register" ? "font-bold mr-4" : "text-white mr-4"}>Register</Link>
        <SignInButton mode="modal"></SignInButton>
        <UserButton/>
    </nav>
}