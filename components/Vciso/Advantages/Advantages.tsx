import React from 'react';
import Button from "@/components/Button/Button";
import {advItems} from "@/data/data";
import Tick from '../../../public/icons/tick.svg'
import Image from "next/image";

{/* eslint-disable react/no-unescaped-entities */}
const Advantages = () => {
    return (
        <div className='p-[64px] text-center flex flex-col gap-[43px] max-lg:p-[32px]'>
            <div className='flex flex-col gap-[43px]'>
                <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>Included in ByteCode’s vCISO services</h1>
                <div className='flex flex-row justify-between max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col'>
                    {advItems.map(item => (
                        <div key={item.id} className='p-[24px] flex flex-col items-start text-start gap-[15px]'>
                            <Image src={Tick} alt={''} />
                            <h3 className='text-[24px] font-semibold'>{item.title}</h3>
                            <p className='text-[#777777]'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[44px]'>
                <h1 className='text-[34px] font-semibold max-lg:text-[32px]'>See how a vCISO can safeguard your organization's future</h1>
                <div>
                    <Button text={'Schedule a Consultation'} />
                </div>

            </div>
        </div>
    );
};

export default Advantages;