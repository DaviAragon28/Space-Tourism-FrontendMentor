import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SpaceLogo from '../../public/assets/shared/logo.svg'
import Menu from '../Menu/Menu'
import ToggleIcon from '../ToggleIcon/ToggleIcon'

const Header = () => {
  return (
    <header className=' absolute z-40 p-4 flex w-full justify-between items-center md:pr-0 md:pt-0 md:pl-6 lg:pt-8 lg:pl-10 xl:pl-14'>
      <Link href='/'>
        <Image className='cursor-pointer' width={40} height={40} src='/assets/shared/logo.svg' alt="Logo" />
      </Link>
      {/* <Image className='h-6' width={24} height={21} src='/assets/shared/icon-hamburger.svg' alt="icon-humburguer" /> */}
      <ToggleIcon />
      {/* <Menu /> */}
    </header>
  )
}

export default Header