import React from 'react';
import approach from "@/data/approach";

const Approach = () => {
    return (
        <div className='p-[64px] flex flex-col justify-center gap-[44px] bg-[#F7F9FC] max-lg:p-[32px]'>
            <div className='flex flex-col items-center justify-center gap-[15px] text-center'>
                <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>Our DevSecOps Approach</h1>
                <p className='text-[#777777]'>DevSecOps is the practice of integrating security into every step of the software development
                    lifecycle
                </p>
            </div>

            <div className='flex flex-row items-start justify-between gap-[38px] max-lg:flex-col'>
                {approach.map(item => (
                    <div key={item.id}
                        className='p-[24px] bg-white rounded-[10px] border-[#E4E4E4] border flex flex-col items-start justify-start gap-[15px] h-full'>
                        <h2 className='text-[24px] font-semibold'>{item.title}</h2>
                        <ul className='list-disc flex flex-col items-start justify-center gap-[15px] ml-[15px]'>
                            {item.items.map((item, index) => (
                                <li key={index} className='text-[#777777]'><span
                                    className='font-semibold'>{item.name}</span> {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}


            </div>

        </div>
    );
};

export default Approach;