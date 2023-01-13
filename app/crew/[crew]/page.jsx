'use client'
import Image from 'next/image'
import { linksCrew } from '../../../utils/links'
import React, { useEffect, useState } from 'react'
import { Navigation } from '../../../components/Navigation/Navigation'
import { fontBarlow, fontBellefair } from '../../../font/font'

const page = ({ params }) => {
  const [people, setPeople] = useState([])
  const { crew } = params


  const creewToUpperCase = crew.charAt(0).toUpperCase() + crew.slice(1);
  const filterPeople = people.flat().filter(place => place.name.includes(creewToUpperCase))

  useEffect(() => {
    fetch('/api/crew')
      .then(res => res.json())
      .then(({ data }) => {
        setPeople(data);
      })
  }, [])



  if (filterPeople.length > 0) {
    return (
      <>
        {filterPeople.map(data => (
          <div className={`md:flex md:flex-col-reverse lg:flex-row-reverse  ${data.name.includes('Mark') ? 'md:mt-2' : 'md:mt-7'} lg:items-center lg:justify-around lg:mt-10 xl:mt-20`} key={data.name}>

            <div className={`${data.name.includes('Mark') ? 'w-[220px] md:w-[320px]' : 'w-[220px] md:w-[420px] lg:w-[370px]'}  mt-9 mb-7 h-auto mx-auto border-b border-gray-500 md:border-0  lg:m-0`}>
              <Image
                className=' object-cover w-full'
                src={data.images.webp}
                width={200}
                height={200}
                alt={data.name}
              // objectFit='cover'
              />
            </div>
            <div className='md:flex md:flex-col-reverse lg:gap-10'>
              <Navigation links={linksCrew} creew />
              <div className='flex flex-col gap-2 mt-4  px-10 text-center text-white md:max-w-lg md:mx-auto lg:text-left lg:p-0 lg:gap-3 mb-6 '>
                <p className={`${fontBellefair.className} text-xl opacity-40 md:text-xl`}>{data.role}</p>
                <h3 className={`${fontBellefair.className} font-normal   text-3xl md:text-6xl`}>{data.name}</h3>
                <p className={`${fontBarlow.className} text-lightBlue text-base md:text-xl`}>{data.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default page