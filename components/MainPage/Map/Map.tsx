import React from 'react';
import Image from "next/image";
import Outposts from '../../../public/icons/customers/outposts.svg'
import Rokkex from '../../../public/icons/customers/rokkex.svg'
import Lunch from '../../../public/icons/customers/lunch.svg'
import Badm from '../../../public/icons/customers/badm.svg'
import Izibank from '../../../public/icons/customers/izibank.svg'
import Sme from '../../../public/icons/customers/sme.svg'
import WorldMap from '../../../public/main/map.svg'

const Map = () => {
    return (
        <div className='py-[69px] px-[64px] text-center max-lg:p-[32px]'>
            <h3>Market trust us</h3>
            <div className='flex flex-row items-center justify-between content-center pt-[16px] gap-[10px] max-lg:grid max-lg:grid-cols-3 max-lg:grid-auto-flow-dense max-sm:flex max-sm:flex-col max-sm:gap-[20px]'>
                <Image src={Outposts} alt='' className='max-lg:w-full max-sm:w-[75%]'/>
                <Image src={Rokkex} alt='' className='max-lg:w-full max-sm:w-[75%]'/>
                <Image src={Lunch} alt='' className='max-lg:w-full max-sm:w-[75%]'/>
                <Image src={Badm} alt='' className='max-lg:w-full max-sm:w-[75%]'/>
                <Image src={Izibank} alt=''className='max-lg:w-full max-sm:w-[75%]'/>
                <Image src={Sme} alt=''className='max-lg:w-full max-sm:w-[75%]'/>
            </div>

            <div className='flex flex-col pt-[24px] gap-[24px] max-lg:pt-[32px] max-sm:pt-[48px]'>
                <h1 className='text-[45px] font-semibold max-lg:text-[36px] max-sm:text-[24px]'>Client distribution map:</h1>
                <p className='text-[16px] font-normal text-[#B1B1B1]  max-sm:text-[12px]'>This map highlights our commitment to delivering top-notch security solutions to clients
                    worldwide</p>
            </div>
            <Image src={WorldMap} alt='map' className='w-full pt-[27px]'/>
        </div>
    );
};

export default Map;