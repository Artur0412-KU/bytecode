import React from 'react';

const Banner = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <div className='py-[44px] px-[64px] bg-[#459BDD] flex flex-col items-center justify-center gap-[15px] text-white max-lg:p-[32px]'>
            <h1 className='text-[50px] font-semibold max-lg:text-[36px]'>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Banner;