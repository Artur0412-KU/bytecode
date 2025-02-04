import React from 'react';

{/* eslint-disable react/no-unescaped-entities */}
const Benefits = () => {
    return (
        <div className='p-[64px] flex flex-col items-center gap-[44px] max-lg:p-[32px]' id='benefit'>
            <div className='flex flex-col text-center gap-[15px]'>
                <h1 className='text-[45px] font-semibold max-lg:text-[32px]'>Partnership Benefits</h1>
                <p className='text-[#777777]'>DevSecOps is the practice of integrating security into every step of the
                    software development lifecycle</p>
            </div>

            <div className='flex flex-row gap-[38px] max-lg:gap-[19px] max-sm:flex-col'>
                <div className='p-[24px] bg-white border-[#E4E4E4] border rounded-[10px] flex flex-col gap-[15px]'>
                    <h2 className='text-[24px] font-semibold'>Expand Your Offerings</h2>
                    <p className='text-[#777777]'>Enhance your portfolio with ByteCode's cutting-edge security
                        solutions, ranging from penetration testing to continuous monitoring.</p>
                </div>
                <div className='p-[24px] bg-white border-[#E4E4E4] border rounded-[10px] flex flex-col gap-[15px]'>
                    <h2 className='text-[24px] font-semibold'>Expert Support</h2>
                    <p className='text-[#777777]'>Gain access to our team of experts who will work closely with you to deliver the best results for your clients.</p>
                </div>
                <div className='p-[24px] bg-white border-[#E4E4E4] border rounded-[10px] flex flex-col gap-[15px]'>
                    <h2 className='text-[24px] font-semibold'>Revenue Growth</h2>
                    <p className='text-[#777777]'>Increase your profitability with competitive margins and incentives designed to reward your success.</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;