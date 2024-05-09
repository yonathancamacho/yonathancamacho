"use client"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'
import NavigationLink from './NavigationLink'
import NavigationBarMenuOverlay from "./NavigationBarMenuOverlay"
import React, { useState } from 'react'

const navigationLinks = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Projects",
        href: "#projects",
    },
    {
        title: "Qualifications",
        href: "#qualifications",
    },
    {
        title: "Contact",
        href: "#contact",
    }
]

const NavigationBar = () => {
    const [isNavigationBarOpen, setNavigationBarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#121212] to-[#121212E6]'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={"/"} className='text-xl md:text-5xl text-white font-semibold'>
                    LOGO
                </Link>
                {/* <NavigationLink href={"/"} title={"Home"} /> */}
                <div className='mobile-menu block md:hidden'>
                    {
                        !isNavigationBarOpen ? (
                            <button onClick={() => setNavigationBarOpen(true)} className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavigationBarOpen(false)} className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navigationbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navigationLinks.map((link, index) => (
                                <li key={index}>
                                    <NavigationLink href={link.href} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                isNavigationBarOpen ? <NavigationBarMenuOverlay navigationLinks={navigationLinks} /> : null
            }
        </nav>
    )
}

export default NavigationBar
