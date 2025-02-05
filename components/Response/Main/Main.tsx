import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import MainSvg from "@/public/main/response_right.svg";

const Main = () => {
    return (
        <div
            className='bg-black h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[20px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>Security Response Team</h3>
                <h1 className='text-[50px] font-semibold text-white max-lg:text-[35px]'>Your First Line of Defense in Cybersecurity Incidents</h1>
                <p className='text-[18px] max-lg:text-[16px] text-[#B1B1B1] max-sm:text-[14px]'>At ByteCode, our Security Response Team (SRT) is on standby 24/7 to help you navigate and mitigate cybersecurity threats. With a blend of technical expertise and real-world experience, we ensure that your organization is prepared to handle any security incident effectively.</p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={MainSvg} alt={''}/>
        </div>
    );
};

export default Main;