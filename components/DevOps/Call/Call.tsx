import React from 'react';
import Button from "@/components/Button/Button";

const Call = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px] text-center'>
            <div className='flex flex-col items-center justify-center gap-[15px]'>
                <h1 className='text-[34px] font-semibold'>Get a Quote</h1>
                <p className='text-[#777777]'>Ready to secure your software development pipeline?</p>
            </div>
            <Button text={'Request a Quote'}/>
        </div>
    );
};

export default Call;