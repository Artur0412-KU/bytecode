import React from 'react';
import Button from "@/components/Button/Button";
import serviceItems from "@/data/services";

const Services = () => {
    return (
        <div className='p-[64px] flex flex-col items-center justify-center gap-[44px] max-lg:p-[32px]'>
            <h1 className='text-[45px] font-semibold max-lg:text-[32px] text-center'>Core DevSecOps Services</h1>

            <div className='flex flex-row items-center justify-center gap-[35px] max-lg:flex-col'>
                {serviceItems.map(item => (
                    <div key={item.id} className='p-[24px] bg-[#F5F5F5] rounded-[10px] flex flex-col items-start gap-[15px]'>
                        <h3 className='text-[18px] font-semibold'>{item.title}</h3>
                        <p className='text-[#777777]'>{item.text}</p>
                    </div>
                ))}
            </div>

            <Button text={'Get more information'}/>
        </div>
    );
};

export default Services;