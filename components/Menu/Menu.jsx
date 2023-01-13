import Link from 'next/link'
import React from 'react'
import { linksPages } from '../../utils/links'
import { fontBarlow, fontBellefair } from '../../font/font'
import { usePathname } from 'next/navigation'



const Menu = ({ toggle, setToggle }) => {
    const pathname = usePathname()

    return (
        <nav className={`${toggle ? 'right-0' : '-right-[200%]'} w-72   fixed h-screen top-14 pl-10 pt-10 bottom-0 backdrop-blur-xl text-white md:static md:pt-0 md:pl-5 md:bg-darkBlue md:brightness-[1.6] md:text-sm md:w-[500px] lg:w-[700px] md:h-[88px]`}>
            <ul className='flex flex-col gap-3 md:flex-row md:gap-10 lg:gap-16 '>
                {
                    linksPages.map(link => (
                        <Link 
                            key={link.name} 
                            href={link.path} 
                            onClick={() => setToggle(!toggle)}
                        >
                            <li className={`
                                ${pathname.includes(link.active) && 'border-r-4 hover:border-white md:border-r-0 md:border-b-4'}
                                ${link.name === 'HOME' && pathname === '/' && 'border-r-4 hover:border-white md:border-r-0 md:border-b-4'} 
                                ${fontBarlow.className} font-light text-2xl flex gap-4 md:text-xl md:gap-8 lg:gap-2 lg:font-normal md:hover:border-b-4 hover:border-gray-600 md:py-7  `}
                            >
                                <span className='md:hidden font-bold lg:block'>
                                    {link.number}
                                </span>{link.name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Menu