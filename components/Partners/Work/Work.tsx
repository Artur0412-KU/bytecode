import React from 'react';
import {partnerWorkItems} from "@/data/works";

const Work = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>How it works</h1>

            <div className='flex flex-row items-start justify-between w-full max-sm:flex-col max-sm:gap-[40px]'>
                {partnerWorkItems.map(item => (
                    <div key={item.id}
                         className='flex flex-col items-start gap-[15px] w-[263px] max-lg:w-[180px] max-sm:w-full'>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <h3 className='px-[10.5px] py-[3px] bg-[#459BDD] rounded-[50%] border-white border-[4px] shadow-lg text-[14px] text-white font-semibold'>{item.number}</h3>
                            <hr className='w-[148px] h-[4px] bg-[#E0EDFF] rounded-[5px] max-lg:w-[100px] max-sm:w-[148px]'/>
                        </div>
                        <div className='flex flex-col items-start gap-[15px]'>
                            <h2 className='text-[18px] font-semibold'>{item.title}</h2>
                            <p className='text-[#777777]'>{item.text}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Work;