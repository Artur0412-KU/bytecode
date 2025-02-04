import React from 'react';

const Videos = () => {
    return (
        <div className='bg-[#F7F9FC] py-[44px] px-[64px] flex items-center justify-center max-lg:p-[32px]'>
            <div className='bg-white w-[480px] max-lg:w-full'>
                <iframe height="270" width="480"
                        src="https://www.youtube.com/embed/kuUqKx2LR3U"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='max-lg:w-full'>
                </iframe>

                <div className='py-[22px] px-[44px] flex flex-col items-start gap-[15px] max-sm:p-[18px]'>
                    <h2 className='text-[24px] font-semibold'>Does Your Wallet Secure?</h2>
                    <div className='flex flex-row gap-[14px]'>
                        <p className='text-[12px] text-[#B3B3B3]'>Jun 26, 2023</p>
                        <p className='text-[12px] text-[#B3B3B3]'>· 37 min </p>
                        <p className='text-[12px] text-[#B3B3B3]'>· Video</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Videos;