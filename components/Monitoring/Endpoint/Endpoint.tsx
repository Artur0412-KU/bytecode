import React from 'react';
import EntrySvg from '../../../public/main/entry_right.svg'
import Image from "next/image";

const Endpoint = () => {
    return (
        <div className='bg-[#F7F9FC] p-[44px] flex items-center justify-between max-lg:p-[32px] max-sm:flex-col max-sm:items-center'>
            <div className='flex items-start flex-col gap-[15px]'>
                <h1 className='text-[34px] font-semibold max-lg:text-[24px]'>Endpoint & Cloud Workload Protection</h1>
                <p className='text-[#777777] w-1/2 max-sm:w-full'>ByteCode Security Monitoring Service unifies historically separate functions into a single agent and
                    platform architecture. Protection is provided for public clouds, private clouds, and on-premise data
                    centers.</p>
            </div>

            <Image src={EntrySvg} alt={''} className='max-lg:w-1/2 max-sm:w-full'/>
        </div>
    );
};

export default Endpoint;