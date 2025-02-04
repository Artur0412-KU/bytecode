import React from 'react';
import Button from "@/components/Button/Button";

const Call = () => {
    return (
        <div className='flex items-center justify-center py-[64px] flex-col gap-[15px] text-center max-lg:py-[32px] bg-[#F7F9FC]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[35px]'>Security Monitoring</h1>
            <p className='text-[#777777] w-1/2 max-sm:w-[75%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo.</p>
            <Button text={'Schedule a Consultation'} />
        </div>
    );
};

export default Call;