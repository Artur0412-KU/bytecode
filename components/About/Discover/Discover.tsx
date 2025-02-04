import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import MainSvg from '../../../public/main/main_right.svg'

const Discover = () => {
    return (
        <div className='p-[64px] bg-black text-white flex flex-row items-center justify-between max-lg:p-[32px] max-sm:flex-col max-sm:gap-[16px]'>
            <div className='flex flex-col items-start justify-center gap-[12px] w-[70%] max-lg:w-[50%] max-lg:gap-[18px] max-sm:w-full'>
                <h3 className='leading-normal tracking-[0.15em]'>About Us</h3>
                <h1 className='text-[50px] font-semibold max-lg:text-[35px]'>Discover Who We Are and What Drives Us</h1>
                <p className='font-normal text-[#B1B1B1]'>
                    This page will provide an in-depth look into ByteCode, our mission, values, and the people behind
                    the company. It will serve as a connection point between the company and its clients, showcasing
                    ByteCode's dedication to cybersecurity and its role as a trusted partner in the industry.
                </p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={MainSvg} alt={''}/>
        </div>
    );
};

export default Discover;