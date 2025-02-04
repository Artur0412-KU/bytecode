import React from 'react';
import Card1 from '../../../public/main/card/card1.svg'
import Card2 from '../../../public/main/card/card2.svg'
import Card3 from '../../../public/main/card/card3.svg'
import Image from "next/image";

const Cards = () => {
    return (
        <div className='pb-[64px] pt-[44px] px-[64px] bg-[#F7F9FC] flex flex-row gap-[38px] max-lg:gap-[24px] max-sm:flex-col max-lg:px-[32px] max-lg:pb-[32px]'>
            <div
                className='bg-[#FFFFFF] rounded-[10px] border-[#E4E4E4] border pl-[24px] pt-[24px] flex flex-col items-start justify-between gap-[15px] w-1/2 max-sm:w-full'>
                <h1 className='text-[24px] font-semibold max-lg:text-[20px]'>ByteCode Security Monitoring Service</h1>
                <p className='text-[#777777]'>ByteCode Security Monitoring Service is the most advanced security
                    approach that incorporates human
                    expertise and technology to perform monitoring, advanced threat detection, and response in
                    real-time</p>
                <Image src={Card1} alt={''} className='w-full'/>


            </div>
            <div
                className='bg-[#FFFFFF] rounded-[10px] border-[#E4E4E4] border pl-[24px] pt-[24px] flex flex-col items-start justify-between gap-[15px] w-1/2 max-sm:w-full'>
                <h1 className='text-[24px] font-semibold max-lg:text-[20px]'>Active XDR protection from modern threats</h1>
                <p className='text-[#777777]'>Our systems provides analysts real-time correlation and context. Active responses are granular, encompassing on-device remediation so endpoints are kept clean and operational.</p>
                <Image src={Card2} alt={''} className='w-full'/>
            </div>
            <div
                className='bg-[#FFFFFF] rounded-[10px] border-[#E4E4E4] border pl-[24px] pt-[24px] flex flex-col items-start justify-between gap-[15px] w-1/2 max-sm:w-full'>
                <h1 className='text-[24px] font-semibold max-lg:text-[20px]'>A comprehensive SIEM solution</h1>
                <p className='text-[#777777]'>The  Security Information and Event Management (SIEM) solution provides  monitoring, detection, and alerting of security events and incidents.</p>
                <Image src={Card3} alt={''} className='w-full'/>
            </div>
        </div>
    );
};

export default Cards;