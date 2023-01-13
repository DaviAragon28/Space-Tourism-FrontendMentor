'use client'
import Image from 'next/image'
import { linksDestination } from '../../../utils/links'

import React, { useEffect, useState } from 'react'
import { Navigation } from '../../../components/Navigation/Navigation'
import { fontBarlow, fontBellefair } from '../../../font/font'

const DestinationPage = ({ params }) => {
  const [locations, setLocations] = useState([])
  const { destination } = params


  const destinationToUpperCase = destination.charAt(0).toUpperCase() + destination.slice(1);
  const filterLocations = locations.flat().filter(place => place.name === destinationToUpperCase)

  useEffect(() => {
    fetch('/api/destinations')
      .then(res => res.json())
      .then(({ data }) => {
        setLocations(data);
      })
  }, [])


  if (filterLocations.length > 0) {
    return (
      <>
        {filterLocations.map(data => (
          <div className='lg:flex lg:justify-evenly lg:pt-10' key={data.name}>
            <Image
              className='mt-5 mx-auto lg:w-96 lg:mx-0'
              src={data.images.png}
              width={200}
              height={200}
              alt={data.name}
            />
            <div className=''>
              <Navigation links={linksDestination} />
              <div className='pb-5 mt-8 text-white text-center px-2 flex flex-col gap-2 md:max-w-lg md:mx-auto lg:text-left lg:px-0'>
                <h1 className={`text-7xl ${fontBellefair.className} md:text-8xl`}>{data.name}</h1>
                <p className={`text-lightBlue text-base px-5 md:px-10 ${fontBarlow.className} lg:px-0 lg:max-w-sm md:text-xl`}>{data.description}</p>
                <div className='border-t border-lightBlue my-2 mx-3 md:my-4 lg:mx-0'></div>
                <div className='flex flex-col md:flex-row md:justify-around md:items-center lg:justify-start lg:gap-10'>
                  <div className='flex flex-col md:gap-2'>
                    <p className={`text-lightBlue text-lg ${fontBarlow.className} lg:text-sm`}>AVG. DISTANCE</p>
                    <p className={`${fontBellefair.className} text-3xl lg:text-2xl`}>{data.distance}</p>
                  </div>
                  <div className='flex flex-col mt-2 md:mt-0 md:gap-2'>
                    <p className={`text-lightBlue text-lg ${fontBarlow.className} lg:text-sm`}>EST. TRAVEL TIME</p>
                    <p className={`${fontBellefair.className} text-3xl lg:text-2xl`}>{data.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </>
    )
  }
}

export default DestinationPage