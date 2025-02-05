import React from 'react';
import Button from "@/components/Button/Button";
import WorkSvg from '../../../public/main/work.svg'
import Image from "next/image";

const Work = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>How does it work?</h1>
            <div className='flex flex-row items-center justify-between max-sm:flex-col-reverse max-sm:gap-[50px]'>
                <div className='flex flex-col gap-[15px]'>
                    <div className='flex items-start flex-row gap-[15px]'>
                        <h3 className='py-[3px] px-[10px] border-[#D9D9D9] border-[3px] rounded-[50%] font-semibold text-[14px]'>1</h3>
                        <div className='flex items-start flex-col gap-[15px] w-1/3 max-lg:w-1/2 max-sm:w-full'>
                            <h2 className='text-[24px] font-medium'>Get a quote</h2>
                            <p className='text-[#777777]'>Start by reaching out to us with your specific requirements.
                                We’ll
                                provide you with a detailed quote tailored to the scope of your security testing
                                needs.</p>
                        </div>
                    </div>
                    <div className='flex items-start flex-row gap-[15px]'>
                        <h3 className='py-[3px] px-[10px] border-[#D9D9D9] border-[3px] rounded-[50%] font-semibold text-[14px]'>2</h3>
                        <div className='flex items-start flex-col gap-[15px] w-1/3 max-lg:w-1/2 max-sm:w-full'>
                            <h2 className='text-[24px] font-medium'>Get a quote</h2>
                            <p className='text-[#777777]'>Start by reaching out to us with your specific requirements.
                                We’ll
                                provide you with a detailed quote tailored to the scope of your security testing
                                needs.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-[15px]'>
                        <p className='text-[#777777]'>On average, it takes from 10 to 15 business days to complete the
                            pentest.</p>
                        <Button text={'Request a Quote'}/>
                    </div>

                </div>
                <div className='flex flex-col items-center justify-center gap-[15px]'>
                    <Image src={WorkSvg} alt={''} className='w-[70%]'/>
                    <p className='text-[#777777] w-1/2 text-center'>Submit the required documentation and get the estimation of the process scope, timeline, and price.</p>
                </div>
            </div>

        </div>
    );
};

export default Work;