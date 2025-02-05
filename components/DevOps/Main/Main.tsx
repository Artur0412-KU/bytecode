import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import DevOpsSvg from "@/public/main/devops_right.svg";

const Main = () => {
    return (
        <div
            className='bg-black h-full w-[100%] p-[64px] flex flex-row gap-[99px] max-sm:gap-[50px] justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[20px] w-1/2 max-lg:w-full'>
                <h3 className='text-[16px] tracking-[0.15em] text-white'>DevSecOps</h3>
                <h1 className='text-[50px] font-semibold text-white max-lg:text-[35px]'>
                    Integrate <span className='text-[#459BDD]'>Security</span> into Your Development Pipeline
                </h1>
                <p className='text-[18px] text-[#B1B1B1] max-lg:text-[16px] max-sm:text-[14px]'>
                    Streamline and secure your software development lifecycle by integrating security practices at every stage with our DevSecOps solutions.
                </p>
                <p className='text-[18px] text-[#B1B1B1] max-lg:text-[16px] max-sm:text-[14px]'>
                    Our approach ensures that security is a continuous, integrated part of your development process,
                    from initial planning through to deployment. By automating security checks and embedding best practices into your workflow,
                    we help you deliver secure, reliable software faster and more efficiently.
                </p>
                <Button text={'Request a Quote'}/>
            </div>
            <Image src={DevOpsSvg} alt={''}/>
        </div>
    );
};

export default Main;