import React from 'react'
import Image from 'next/image'
import { fontBellefair, fontBarlow } from '../../font/font'


const layout = ({ children }) => {
    return (
        <div>
            <div className=" fixed -z-50 w-screen h-screen md:hidden">
                <Image
                    layout="fill"
                    src='/assets/technology/background-technology-mobile.jpg'
                    alt="bg"
                    // objectFit="cover"
                />
            </div>
            <div className="hidden fixed -z-50 w-screen h-screen md:block">
                <Image
                    layout="fill"
                    src='/assets/technology/background-technology-tablet.jpg'
                    alt="bg"
                    // objectFit="cover"
                />
            </div>
            <div className="hidden fixed -z-50 w-screen h-screen lg:block">
                <Image
                    layout="fill"
                    src='/assets/technology/background-technology-desktop.jpg'
                    alt="bg"
                    // objectFit="cover"
                />
            </div>
            <p className={`flex gap-2 justify-center 
                text-white pt-20 text-center text-lg  md:justify-start md:px-6 md:pt-32 md:text-xl
                ${fontBarlow.className} lg:pt-44 lg:pl-8 lg:text-2xl xl:pl-36`}>
                    <span className='opacity-30'>03 </span>
                    SPACE LAUNCH 101
            </p>
            {children}
        </div>
    )
}

export default layout