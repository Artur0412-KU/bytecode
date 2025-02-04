import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import MonitoringSvg from "@/public/main/monitoring_right.svg";

{/* eslint-disable react/no-unescaped-entities */}
const Main = () => {
    return (
        <div
            className='bg-black h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[12px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>vCISO</h3>
                <h1 className='text-[50px] font-semibold text-white max-lg:text-[35px]'>Virtual Chief Information Security Officer Services</h1>
                <p className='text-[16px] text-[#B1B1B1] max-sm:text-[14px]'>Engage top-tier cybersecurity experts part-time or fractional to  delegate the routine and build a rock-solid cybersecurity program. We'll  guide you to compliance, stress-free.
                </p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={MonitoringSvg} alt={''}/>
        </div>
    );
};

export default Main;