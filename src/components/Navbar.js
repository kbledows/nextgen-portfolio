import React from 'react'
import Link from 'next/link';
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className="navbar bg-[#344E41] fixed z-50 shadow-lg">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#3A5A40] rounded-box w-52">
                    <li><Link href="/about">About</Link></li>
                    <li>
                        <Link href="/projects">Projects</Link>
                        <ul className="p-2">
                            <li><Link href="/projects">SomeProject</Link></li>
                            <li><Link href="/projects">SomeOtherProject</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl hover:bg-[#3A5A40] focus:bg-[#588157]" href="/">Home</Link>
            </div>
            <div className="flex-none hidden md:flex">
                <Link className="btn btn-ghost normal-case text-xl hover:bg-[#3A5A40] focus:bg-[#588157]" href="/projects">Projects</Link>
                <Link className="btn btn-ghost normal-case text-xl hover:bg-[#3A5A40] focus:bg-[#588157]" href="/skills">Skills</Link>
                <Link className="btn btn-ghost normal-case text-xl hover:bg-[#3A5A40] focus:bg-[#588157]" href="/about">About</Link>
                <Link className="btn btn-ghost normal-case text-xl hover:bg-[#3A5A40] focus:bg-[#588157]" href="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar