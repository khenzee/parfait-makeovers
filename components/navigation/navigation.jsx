'use client'
import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactButton } from '../contactBtn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navigation() {
    const links = [
        { name: 'HOME.', link: '/' },
        { name: 'ABOUT US.', link: '/about' },
        { name: 'SERVICES.', link: '/services' },
        { name: 'GALLERY.', link: '/gallery' }
    ];

    const pathname = usePathname(); // Current route
    const [isVisible, setIsVisible] = useState(false);

    useGSAP(() => {
        if (isVisible) {
            // Animate menu opening
            gsap.to('.navBox', {
                x: 0,
                opacity: 1,
                duration: 0.5,
            });
            gsap.to('.linkbox', {
                y: 0,
                opacity: 1,
                duration: 0,
                stagger: 0.3,
                delay:1
            });
        } else {
            // Animate menu closing
            gsap.to('.navBox', {
                x: '100%',
                duration: 0.5,
            });
            gsap.to('.linkbox', {
                y: 5,
                opacity: 0,
                duration: 0.5,
                delay:1
            });
        }
    }, [isVisible]);

    return (
        <div className=''>
            {/* -----NAVIGATION BOX----- */}
            <div className={`fixed z-10 top-0 ${isVisible ? 'block' : 'hidden'} 
            navBox w-full md:w-[70%] md:right-0 h-full bg-primary overflow-hidden`}>
                <div className='flex justify-end py-3 px-8'>
                    <div className='bg-primary-foreground block p-2 mt-2' onClick={() => setIsVisible(!isVisible)}>
                        <X className='text-primary' />
                    </div>
                </div>

                {/* -----NAVIGATION LINKS----- */}
                <div className='flex flex-col gap-4 linkbox'>
                    <div className='flex justify-center'>
                        <h2 className='text-center w-[400px] text-gray-500'>
                            PARFAIT. MAKEOVER
                        </h2>
                    </div>

                    <div className="flex flex-col align-middle justify-center">
                        {links.map((linkz, index) => {
                            const isActive = pathname === linkz.link;
                            return (
                                <Link key={index} href={linkz.link} 
                                    className={`linkBox text-center p-2 font-bold text-2xl ${isActive ? 'text-white' : 'text-gray-400'} hover:text-white`}
                                    onClick={() => setIsVisible(false)}
                                >
                                    {linkz.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* -----CONTACT BUTTON----- */}
                    <div className='flex justify-center align-middle mt-20'>
                        <div className=''>
                            <div className="bg-green-400 inline-block text-primary" onClick={() => setIsVisible(false)}>
                                <ContactButton title='Contact Us on Whatsapp' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----MENU BUTTON----- */}
            <div className='flex justify-between align-middle lg:px-[8rem] md:px-[4.4rem] py-3 px-8'>
                <p className='py-2 cursor-pointer'><Link href='/'>@parfiat</Link></p>
                <div className='shadow-sm p-2' onClick={() => setIsVisible(!isVisible)}>
                    <Menu className='' />
                </div>
            </div>
        </div>
    );
}

export default Navigation;
