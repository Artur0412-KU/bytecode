import React from 'react';
import Button from "@/components/Button/Button";

const Call = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px] text-center'>
            <div className='flex flex-col items-center justify-center gap-[15px]'>
                <h1 className='text-[34px] font-semibold'>Ready to Partner with ByteCode?</h1>
                <p className='text-[#777777]'>Encourage potential partners to reach out for more information or to begin the application process</p>
            </div>
            <Button text={'Request a Quote'}/>
        </div>
    );
};

export default Call;