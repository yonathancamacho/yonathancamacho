"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const IntroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 w-full place-self-center text-center sm:text-left'>
                    <h1 className="text-white text-4xl font-extrabold sm:text-4xl lg:text-6xl mb-4">
                        <TypeAnimation
                            sequence={[
                                'Yonathan Camacho',
                                3000,
                                'Software Developer',
                                1000,
                                'Web Developer',
                                1000,
                                '3D Modeling',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Portfolio
                    </p>
                    <div>
                        <button className='px-5 py-3 w-full sm:w-fit rounded-full bg-trasparent text-white font-bold border-white hover:bg-indigo-500 hover:border-indigo-500 border-2 mr-4'>
                            Connect
                        </button>
                        <button className='px-5 py-3 w-full sm:w-fit rounded-full bg-trasparent text-white font-bold border-white hover:bg-indigo-500 hover:border-indigo-500 border-2 mt-3'>
                            View Stats
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center lg:mt-0 mt-4'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/portrait.png"
                            alt="portrait of yonathan camacho"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection
