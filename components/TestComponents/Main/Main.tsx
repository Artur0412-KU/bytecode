import React from 'react';
import Button from "@/components/Button/Button";
import MainSvg from '../../../public/main/security_right.svg'
import Image from "next/image";

const Main = () => {
    return (
        <div className='bg-black h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[20px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>Security Testing Services</h3>
                <h1 className='text-[50px] font-semibold text-white max-lg:text-[35px]'>Uncover <span
                    className='text-[#459BDD]'>Vulnerabilities</span> Before They Become Threats</h1>
                <p className='text-[18px] text-[#B1B1B1] max-lg:text-[16px] max-sm:text-[14px]'>Identify and mitigate vulnerabilities in
                    your web and mobile applications, network infrastructure, and cryptocurrency systems with our expert
                    security testing.</p>
                <p className='text-[18px] text-[#B1B1B1] max-lg:text-[16px] max-sm:text-[14px]'>Our team of seasoned professionals employs the latest tools and methodologies to thoroughly assess your systems, providing detailed reports and actionable insights. By proactively addressing potential weaknesses, we help you fortify your defenses and maintain a robust security posture.</p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={MainSvg} alt={''} />
        </div>
);
};

export default Main;