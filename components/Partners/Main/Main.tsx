import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import DevOpsSvg from "@/public/main/devops_right.svg";

{/* eslint-disable react/no-unescaped-entities */}
const Main = () => {
    return (
        <div
            className='bg-black h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[12px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>Become a Partner</h3>
                <h1 className='text-[50px] font-semibold text-white max-lg:text-[35px]'>
                    Grow Together with ByteCode
                </h1>
                <p className='text-[16px] text-[#B1B1B1] max-sm:text-[14px]'>
                    Streamline and secure your software development lifecycle by integrating security practices at every
                    stage with our DevSecOps solutions.
                </p>
                <p className='text-[16px] text-[#B1B1B1] max-lg:text-[14px]'>
                    Join forces with ByteCode to deliver innovative security solutions and create a safer digital world.
                    By becoming a partner, you'll gain access to our extensive resources, expert support, and a
                    collaborative network designed to help you and your clients succeed.
                </p>
                <p className='text-[16px] text-[#B1B1B1] max-lg:text-[14px]'>
                    Our partnership program is designed to empower you with the tools and knowledge needed to expand
                    your service offerings, enhance customer satisfaction, and drive business growth. Whether you're a
                    reseller, integrator, or technology provider, ByteCode offers a partnership model that suits your
                    needs.
                </p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={DevOpsSvg} alt={''}/>
        </div>
    );
};

export default Main;