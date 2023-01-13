import Link from 'next/link'
import React from 'react'
import { fontBellefair, fontBarlow } from '../../font/font'
import { usePathname } from 'next/navigation'



export const Navigation = ({ links, tech, creew }) => {
  const pathname = usePathname()


  return (
    <nav>
      <ul className={`${fontBarlow.className} text-white flex gap-7 mt-4 justify-center lg:justify-start ${tech && 'lg:flex-col lg:m-0'} `}>
        {
          links.map(link => (
            <Link
              key={link.label}
              href={link.path}>
              {
                !creew && !tech
                  && 
                  <li className={`pb-1 text-lightBlue text-base hover:border-b-[3px] hover:border-gray-600 ${pathname === link.path && 'border-b-[3px] text-white hover:border-white '} lg:text-xl `} >
                    {link.label}
                  </li>
              }
              {
                creew && 
                  <li className={`h-3 w-3 hover:bg-gray-400 rounded-full ${pathname === link.path ? 'bg-white' : 'bg-gray-600'}`}>
                  </li>
              }
              {
                tech &&
                <li className={`border border-gray-500 hover:border-white w-12 h-12 flex items-center justify-center rounded-full lg:w-12 lg:h-12 lg:text-xl xl:w-16 xl:h-16 xl:text-2xl ${pathname === link.path
                  ? ' bg-white text-black'
                  : ' bg-black text-white'
                  }`}>
                    {link.label}
                </li>
              }
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}
