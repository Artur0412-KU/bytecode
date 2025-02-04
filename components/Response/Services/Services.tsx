import React from 'react';
import response from "@/data/response";

const Services = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center bg-[#F7F9FC] gap-[44px] max-lg:p-[32px]'>

                {response.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center gap-[37px]'>
                        <div className='flex flex-col items-center justify-center gap-[15px]'>
                            <h1 className='text-[34px] font-semibold max-sm:text-[22px]'>{item.title}</h1>
                            <p className='text-[#777777] max-sm:text-[14px]'>{item.subtitle}</p>
                        </div>
                        <div className='grid grid-flow-col grid-rows-1 justify-between gap-[37px] max-lg:flex max-lg:flex-col'>
                            {item.list.map((item, index) => (
                                    <div key={index}  className='p-[24px] bg-white border-l-[5px] border-l-[#459BDD] flex flex-col items-start gap-[15px] max-lg:w-full'>
                                        <h2 className='text-[24px] text-[#459BDD] font-semibold'>{item.title}</h2>
                                        <p className='text-[#777777]'>{item.subtitle}</p>
                                    </div>
                            ))}
                        </div>
                    </div>
                ))}



        </div>
    );
};

export default Services;