import React from 'react';
import Button from "@/components/Button/Button";
import ContactSvg from '../../../public/main/contact_right.svg'
import Image from "next/image";

const Contact = () => {
    return (
        <div className='flex flex-col gap-[44px] p-[64px] max-lg:p-[32px]' id='contact'>
            <div className='flex flex-row items-center justify-between max-sm:flex-col-reverse'>
                <div className='flex flex-col items-start justify-start w-[70%] gap-[12px] max-lg:w-full'>
                    <h3 className='tracking-[0.15em]'>Security Testing Services</h3>
                    <h1 className='font-semibold text-[50px] max-lg:text-[35px]'>Contact Us</h1>
                    <p className='font-normal text-[#777777]'>Use the form for pre-sales questions, platform demo requests,  partnership inquiries, or any questions related to your business  security.</p>
                    <Button text={'Request a Quote'}/>
                </div>
                <Image src={ContactSvg} alt={''} className='w-auto max-lg:w-[40%] max-sm:w-full'/>
            </div>

            <div className='flex flex-row justify-center gap-[44px] max-lg:gap-[20px] max-sm:flex-col'>
                <div className='flex flex-col items-start gap-[15px] p-[24px] max-lg:p-[12px] max-lg:items-center'>
                    <h1 className='text-[24px] font-semibold max-lg:text-[18px]'>CEO & Co-Founder</h1>
                    <h2 className='text-[#777777]'>Andrew Viazoskiy</h2>
                    <a href='mailto:aw@bytecode.team' className='text-[#777777] underline'>aw@bytecode.team</a>
                </div>

                <div className='flex flex-col items-start gap-[15px] p-[24px] max-lg:p-[12px] max-lg:items-center'>
                    <h1 className='text-[24px] font-semibold max-lg:text-[18px]'>CTO & Co-Founder</h1>
                    <h2 className='text-[#777777]'>Mykhailo Antonishyn</h2>
                    <a  href='mailto:ma@bytecode.team' className='text-[#777777] underline'>ma@bytecode.team</a>
                </div>

                <div className='flex flex-col items-start gap-[15px] p-[24px] max-lg:p-[12px] max-lg:items-center'>
                    <h1 className='text-[24px] font-semibold max-lg:text-[18px]'>General Inquiries</h1>
                    <a href='mailto:info@bytecode.team' className='text-[#777777] underline'>info@bytecode.team</a>
                    <a href='mailto:sale@bytecode.team' className='text-[#777777] underline'>sale@bytecode.team</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;