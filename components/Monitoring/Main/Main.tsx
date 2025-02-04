import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import MonitoringSvg from '../../../public/main/monitoring_right.svg'

const Main = () => {
    return (
        <div
            className='bg-black h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[12px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>Security Monitoring</h3>
                <h1 className='text-[50px] font-semibold text-white max-lg:text-[35px]'>Stay Ahead of Threats with Continuous Security Monitoring</h1>
                <p className='text-[16px] text-[#B1B1B1] max-sm:text-[14px]'>Ensure the ongoing safety of your digital assets by implementing real-time security monitoring across your web applications, networks, and infrastructure.
                </p>
                <p className='text-[16px] text-[#B1B1B1] max-lg:text-[14px]'>Our dedicated team utilizes cutting-edge monitoring tools and techniques to provide you with real-time insights into potential threats. By continuously analyzing your security posture and detecting anomalies, we help you respond to incidents swiftly, minimizing the risk of breaches and maintaining the integrity of your systems.</p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={MonitoringSvg} alt={''}/>
        </div>
    );
};

export default Main;