"use client"
import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation";

const Header = () => {
    const path = usePathname()
    return (
        <header className={'bg-primary p-5'}>
            <div className={'flex items-center gap-8 container'}>
                <Link className={path === '/' ? 'font-bold' : ''} href={'/'}>Home</Link>
                <Link className={path === '/car' ? 'font-bold' : ''} href={'/car'}>Car</Link>
            </div>
        </header>
    );
};

export default Header;