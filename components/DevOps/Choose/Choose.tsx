import React from 'react';
import chooseItems from "@/data/choose";
import Tick from '../../../public/icons/tick.svg'
import Image from "next/image";

const Choose = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px]'>
           <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>Why choose us?</h1>

            <div className='flex flex-row items-center justify-center max-sm:flex-col'>
                {chooseItems.map(item => (
                    <div key={item.id} className='p-[24px] pb-[82px] flex flex-col items-start gap-[15px] max-lg:pb-[24px]'>
                        <Image src={Tick} alt={''} />
                        <h3 className='text-[24px] font-semibold'>{item.title}</h3>
                        <p className='text-[#777777]'>{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Choose;