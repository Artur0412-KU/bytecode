import React from 'react';
import Button from "@/components/Button/Button";

const Call = () => {
    return (
        <div className='p-[64px] flex flex-col items-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='font-semibold text-[34px] max-lg:text-[24px] max-sm:text-[18px] text-center'>Not sure what type of security testing service you need?</h1>
            <Button text={'Discuss your priorities with our expert'}/>
        </div>
    );
};

export default Call;