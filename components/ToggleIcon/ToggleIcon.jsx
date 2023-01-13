'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { useState } from 'react'
import Menu from '../Menu/Menu'

const ToggleIcon = ({}) => {
    const [toggle, setToggle] = useState(false)

    const path = toggle ? '/assets/shared/icon-close.svg' : '/assets/shared/icon-hamburger.svg'
    const width = toggle ? 24 : 30
    const height = toggle ? 21 : 30

    return (
        <>
            <Image
                className='cursor-pointer md:hidden'
                onClick={() => setToggle(!toggle)}
                src={`${path}`}
                width={`${width}`}
                height={`${height}`}
                alt='icons'
            />
            <Menu toggle={toggle} setToggle={setToggle} />
        </>
    )
}

export default ToggleIcon