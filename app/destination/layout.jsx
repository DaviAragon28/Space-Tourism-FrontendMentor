import React from 'react'
import Image from 'next/image'
import { fontBellefair, fontBarlow } from '../../font/font'


const layout = ({ children }) => {
    return (
        <div>
            <div className=" fixed -z-50 w-screen h-screen md:block">
                <Image
                    layout="fill"
                    src='/assets/destination/background-destination-mobile.jpg'
                    alt="bg"
                    objectFit="cover"
                />
            </div>
            <div className=" fixed -z-50 w-screen h-screen hidden md:block">
                <Image
                    layout="fill"
                    src='/assets/destination/background-destination-mobile.jpg'
                    alt="bg"
                    objectFit="cover"
                />
            </div>
            <div className=" fixed -z-50 w-screen h-screen hidden lg:block">
                <Image
                    layout="fill"
                    src='/assets/destination/background-destination-desktop.jpg'
                    alt="bg"
                    objectFit="cover"
                />
            </div>
            <p className={`flex gap-2 justify-center 
                text-white pt-20 text-center text-lg md:justify-start md:px-6 md:pt-32 md:text-xl lg:pt-40 lg:pl-32 lg:text-2xl xl:pl-72    ${fontBarlow.className}`}>
                    <span className='opacity-30'>01 </span>
                PICK YOUR DESTINATION
            </p>
            {children}
        </div>
    )
}

export default layout