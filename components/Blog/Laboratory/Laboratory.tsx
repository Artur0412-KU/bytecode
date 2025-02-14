import React from 'react';
import {laboratoryData} from "@/data/blog";
import Card from "@/components/Blog/Card/Card";

const Laboratory = () => {
    return (
        <div>
            <h1 className='text-[45px] font-semibold mb-[15px] max-lg:text-[32px]'>Laboratory</h1>
            <div className='grid grid-cols-2 gap-[44px] max-lg:flex max-lg:flex-col'>
                {laboratoryData.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>

        </div>
    );
};

export default Laboratory;