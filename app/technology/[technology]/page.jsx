'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Navigation } from '../../../components/Navigation/Navigation'
import { fontBarlow, fontBellefair } from '../../../font/font'
import { linksTech } from '../../../utils/links'

const TechnologyPage = ({ params }) => {
    const [technologies, setTechnologies] = useState([])
    const { technology } = params

    const technologyToUpperCase = technology.charAt(0).toUpperCase() + technology.slice(1);
    const filterTechnologies = technologies.flat().filter(tech => tech.name.includes(technologyToUpperCase))

    useEffect(() => {
        fetch('/api/technology')
            .then(res => res.json())
            .then(({ data }) => {
                setTechnologies(data);
            })
    }, [])

    if (filterTechnologies.length > 0) {
        return (
            <>
                {
                    filterTechnologies.map(data => (
                        <div className="lg:flex lg:flex-row-reverse lg:justify-around lg:mt-10" key={data.name}>
                            <div className='lg:w-[350px] xl:w-[450px]'>
                                <Image
                                    className=' my-10 object-cover w-full h-auto lg:hidden'
                                    src={data.images.landscape}
                                    width={1000}
                                    height={1000}
                                    alt={data.name}
                                />
                                <Image
                                    className='hidden my-10 object-cover w-full h-auto lg:block lg:m-0'
                                    src={data.images.portrait}
                                    width={200}
                                    height={200}
                                    alt={data.name}
                                    
                                />
                            </div>
                            <div className='lg:flex lg:items-center lg:gap-10 xl:gap-20'>
                                <Navigation links={linksTech} tech />
                                <div className='flex flex-col gap-4 px-3 text-center mt-10 md:max-w-md md:mx-auto lg:text-left lg:m-0'>
                                    <p className={`${fontBarlow.className} text-lightBlue`}>THE TERMINOLOGY…</p>
                                    <h2 className={`${fontBellefair.className} text-white text-5xl`}>{data.name}</h2>
                                    <p className={`${fontBarlow.className} text-base md:text-xl text-lightBlue`}>{data.description} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default TechnologyPage