import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {ItemType} from "@/interface/item";

const Card = ({item}: {item: ItemType}) => {
    return (
        <div key={item.id} className='bg-white border-[#E4E4E4] border'>
            <div className='bg-white w-full border'>
                <Image src={item.image} alt={''} className='w-full'/>
            </div>
            <div className='py-[22px] px-[44px] flex flex-col items-start gap-[15px] max-sm:p-[18px]'>
                <Link href={item.link}
                      className='text-[24px] font-semibold' target={'_blank'}>{item.title}</Link>
                <p className='text-[12px] text-[#777777]'>{item.description}</p>
                <div className='flex flex-row gap-[14px]'>
                    <p className='text-[12px] text-[#B3B3B3]'>{item.date}</p>
                    <p className='text-[12px] text-[#B3B3B3]'>{item.length}</p>
                    <p className='text-[12px] text-[#B3B3B3]'>{item.theme}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;