import React from 'react';
import Button from "@/components/Button/Button";

const Request = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[22px] max-lg:p-[32px]'>
            <h1 className='text-[34px] font-semibold max-sm:text-[22px]'>Request a Quote</h1>
            <Button text={'Request a Quote'}/>
        </div>
    );
};

export default Request;