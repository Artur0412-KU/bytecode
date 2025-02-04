import React from 'react';
import benefits from "@/data/benefits";
import Image from "next/image";

const Benefits = () => {
    return (
        <div className='p-[64px] text-center bg-[#F7F9FC] flex flex-col justify-center items-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>Benefits of vCISO services by ByteCode</h1>
            <div className='grid grid-cols-3 gap-[38px] max-lg:grid-cols-2 max-lg:gap-[24px] max-lg:grid-auto-flow-dense max-sm:grid-cols-1'>
                {benefits.map(( benefit) => (
                    <div key={benefit.id} className='p-[24px] bg-[#fff] rounded-[10px] border-[#E4E4E4] border flex flex-col gap-[15px] items-start text-start'>
                        <Image src={benefit.image} alt={''}/>
                        <h1 className='text-[24px] font-semibold'>{benefit.title}</h1>
                        <p className='text-[#777777]'>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;