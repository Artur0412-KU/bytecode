import React from 'react';
import Button from "@/components/Button/Button";

const Main = () => {
    return (
        <div className='bg-main-section h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:flex-col max-sm:p-[32px]'>
            <div className='flex items-start flex-col gap-[12px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>Provable Trust For All</h3>
                <h1 className='text-[50px] font-semibold text-white max-sm:text-[32px]'>ByteCode <span
                    className='text-[#459BDD]'>Security</span> Labs</h1>
                <p className='text-[16px] text-[#B1B1B1] max-sm:text-[14px]'>is a leading provider of cybersecurity services, dedicated to
                    protecting your digital assets and ensuring the security of your information systems. Our team of
                    experts delivers comprehensive security solutions tailored to meet the evolving challenges of the
                    digital age.</p>
                <Button text={'Request a Quote'}/>
            </div>
            <div className='grid grid-cols-2'>
                <div className='client-block-black'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>50+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Protected Clients</p>
                </div>
                <div className='client-block-blue'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>1,000+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Vulnerabilities Detected</p>
                </div>
                <div className='client-block-blue'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>6+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Years of expertise</p>
                </div>
                <div className='client-block-black'>
                    <h1 className='text-white text-[32px] font-semibold w-full'>10+</h1>
                    <p className='text-[#B1B1B1] text-[16px]'>Partners</p>
                </div>
            </div>
        </div>
    );
};

export default Main;