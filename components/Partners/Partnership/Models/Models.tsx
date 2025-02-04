import React from 'react';

const Models = () => {
    return (
        <div className='p-[64px] pt-[44px] flex flex-col items-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>Partnership Models</h1>

            <div className='flex flex-row gap-[38px] max-lg:gap-[19px] max-sm:flex-col items-start'>
                <div className='p-[24px] flex flex-col gap-[15px]'>
                    <h2 className='text-[24px] font-semibold'>Reseller Partner</h2>
                    <p className='text-[#777777]'>Become an authorized reseller and offer ByteCode's services directly to your clients, with full support from our team.</p>
                </div>
                <div className='p-[24px] flex flex-col gap-[15px]'>
                    <h2 className='text-[24px] font-semibold'>Technology Partner</h2>
                    <p className='text-[#777777]'>Integrate ByteCode's solutions with your existing offerings to deliver comprehensive security packages to your clients.</p>
                </div>
                <div className='p-[24px] flex flex-col gap-[15px]'>
                    <h2 className='text-[24px] font-semibold'>Service Partner</h2>
                    <p className='text-[#777777]'>Collaborate with ByteCode to provide joint services, combining your expertise with our security solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default Models;