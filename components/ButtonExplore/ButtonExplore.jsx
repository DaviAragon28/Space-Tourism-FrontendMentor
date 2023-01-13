import Link from 'next/link'
import React from 'react'
import { fontBellefair } from '../../font/font'

const ButtonExplore = () => {
    return (
        <Link href='/destination/moon'>
            <button className={`
            ${fontBellefair.className} 
            bg-white block
            text-black h-40 w-40 rounded-full mx-auto mt-20 text-2xl transition-shadow hover:shadow-[0px_0px_0px_30px_rgba(37,39,49,1)] md:mt-16 md:h-44 md:w-44 lg:self-start lg:hover:shadow-[0px_0px_0px_50px_rgba(37,39,49,1)] lg:mt-0  active:shadow-[0px_0px_0px_30px_rgba(151,151,151,1)]`}>EXPLORE</button>
        </Link>
    )
}

export default ButtonExplore

// [0_35px_60px_-15px_rgba(0,0,0,0.3)]
// [0_0_0_-37px_rgba(11,13,23,0.3)]
// shadow-[5px_5px_0px_0px_rgba(109,40,217)]