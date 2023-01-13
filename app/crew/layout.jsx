import React from 'react'
import Image from 'next/image'
import { fontBellefair, fontBarlow } from '../../font/font'


const layout = ({ children }) => {
    return (
        <div>
            <div className=" fixed -z-50 w-screen h-screen">
                <Image
                    layout="fill"
                    src='/assets/crew/background-crew-mobile.jpg'
                    alt="bg"
                    objectFit="cover"
                />
            </div>
            <div className="hidden fixed -z-50 w-screen h-screen md:block">
                <Image
                    layout="fill"
                    src='/assets/crew/background-crew-tablet.jpg'
                    alt="bg"
                    objectFit="cover"
                />
            </div>
            <div className="hidden fixed -z-50 w-screen h-screen lg:block">
                <Image
                    layout="fill"
                    src='/assets/crew/background-crew-desktop.jpg'
                    alt="bg"
                    objectFit="cover"
                />
            </div>
            <p className={`flex gap-2 justify-center 
                text-white pt-20 text-center text-lg md:justify-start md:px-6 md:pt-32 md:text-xl lg:pt-44 lg:pl-8 lg:text-2xl xl:pl-40
                ${fontBarlow.className}`}>
                    <span className='opacity-30'>02 </span>
                MEET YOUR CREW
            </p>
            {children}
        </div>
    )
}

export default layout