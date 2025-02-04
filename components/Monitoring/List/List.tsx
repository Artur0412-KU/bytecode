import React from 'react';
import listItems from "@/data/list";

const List = () => {
    return (
        <div className='py-[44px] px-[64px] flex flex-row justify-between max-lg:p-[32px] max-lg:grid max-lg:grid-cols-2 max-lg:gap-[24px] max-sm:flex max-sm:flex-col'>

                {listItems.map((item, index) => (
                    <div key={index} className='flex flex-col items-start gap-[22px]'>
                        <h1 className='text-[24px] font-semibold'>{item.title}</h1>
                        <ul className='flex flex-col gap-[12px] list-disc pl-[20px] text-[#777777]'>
                            {item.list.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
        </div>
    );
};

export default List;